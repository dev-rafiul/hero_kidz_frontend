"use client"
import { handleCart } from '@/actions/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButton = ({product}) => {


    const router = useRouter()
    const path = usePathname()
    const session = useSession();
    const [isloading, setIsLoading] = useState(false);
    const isLogin = session?.status === "authenticated";



    
    const addtoCart = async () => {
        setIsLoading(true);
        if(isLogin){
            const result = await handleCart({product, inc: true})
            if(result.success){
                Swal.fire("success", product?.title, "success")
            }else{
                Swal.fire("Oops", "Product not added to cart", "error")
            }
            setIsLoading(false);
        }
            else{
        router.push(`/login?callbackUrl=${path}`)
        setIsLoading(false);
        }
    }



    return (
        <div>
            <button disabled={session?.status == "loading" || isloading} onClick={addtoCart} className="btn btn-primary btn-wide rounded-3xl flex gap-2">
                      <FaCartPlus></FaCartPlus>
                      Add To Cart
                    </button>
        </div>
    );
};

export default CartButton;