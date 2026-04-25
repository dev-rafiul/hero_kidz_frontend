"use server"

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth";

 


const cartCollection = dbConnect(collections.CART)


export const handleCart = async ({product, inc = true}) => {

    const user = await getServerSession(authOptions);

    return {success: true}

}