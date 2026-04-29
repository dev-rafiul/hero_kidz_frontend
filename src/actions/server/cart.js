"use server"

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

 


const cartCollection = dbConnect(collections.CART)


export const handleCart = async ({product, inc = true}) => {

    const user = await getServerSession(authOptions) || {};

    if(!user?.user?.email) return {success: false}



    const query = {
        email: user?.user?.email,
        productId: product?._id
    }

    const isAdded = await cartCollection.findOne(query);

    if(isAdded){
        // Keep quantity positive. If user decrements last item, remove it from cart.
        if (!inc && isAdded.quantity <= 1) {
            const result = await cartCollection.deleteOne(query);
            revalidatePath("/cart");
            return {success: Boolean(result.deletedCount)}
        }

        const updatedData = {
            $inc: {
                quantity: inc ? 1 : -1
            }
        }

        const result = await cartCollection.updateOne(query, updatedData);
        revalidatePath("/cart");
        return {success: Boolean(result.modifiedCount)}


    }else{

        const newData = {
            productId: product?._id,
            email: user?.email,
            title: product?.title,
            quantity: 1,
            image: product?.image,
            price: product?.price - (product?.price * product?.discount) / 100,
            username: user?.name,
        }


        const result = await cartCollection.insertOne(newData);
        revalidatePath("/cart");
        return {success: result.acknowledged}
        
        
    }




    // return {success: true}

}



export const getCart = cache(
    async () => {
        const user = await getServerSession(authOptions) || {};
        if( !user?.user?.email ) return [];
    
        const query = {email: user?.email}
        const result = await cartCollection.find(query).toArray()
        return result.map((item) => ({
            ...item,
            _id: item?._id?.toString()
        }));
    }
)


export const deleteItemFromCart = async (id) => {
    const user = await getServerSession(authOptions) || {};
    if( !user ) return { success: false };

    const query = {
        email: user?.user?.email,
        productId: id
    };

    const result = await cartCollection.deleteOne(query);
    revalidatePath("/cart");
    


    return { success: Boolean(result.deletedCount) };
}

 
export const clearCart = async() => {
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user) return {success: false}


  const query = {email: user?.user?.email}
  const result = await cartCollection.deleteMany(query)
        return result
}