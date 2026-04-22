"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartButton = ({product}) => {


    const isLogin = false;
    const router = useRouter()
    const path = usePathname()
    const addtoCart = () => {
        if(isLogin) alert(product._id)
            else{
        router.push(`/login?callbackUrl=${path}`)
        }
    }



    return (
        <div>
            <button onClick={addtoCart} className="btn btn-primary btn-wide flex gap-2">
                      <FaCartPlus></FaCartPlus>
                      Add To Cart
                    </button>
        </div>
    );
};

export default CartButton;