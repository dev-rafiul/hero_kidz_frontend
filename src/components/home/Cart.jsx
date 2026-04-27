"use client"
import React, { useMemo } from 'react'
import CartItem from '../cards/CartItem'

const Cart = ({cartItem=[]}) => {
    const items = cartItem;

    // const totalItems = items.reduce((acm, item) => acm+item.quantity, 0)

    const totalItems = useMemo(() => items.reduce((acm, item) => acm + item.quantity, 0), [items])

    const totalPrice = items.reduce((acm, item) => acm + (Number(item.price) * item.quantity), 0);




    return (
        <div className="space-y-4">

<p className="py-3">
                <span className='text-primary font-semibold'>{totalItems}</span> items in the cart
            </p>



<div className='flex-3 space-y-4'>
        <div>
          {items.map((item) => (
              <CartItem key={item?._id || item?.productId} item={{...item, _id: item._id.toString()}} />
            ))}
            </div>
            </div>

            <div className='flex-1'>
            <p className="font-semibold">Total Items: {totalItems}</p>
            <p className="font-semibold">All Products Total: ${totalPrice.toFixed(2)}</p>
            </div>


        </div>
    )
}


export default Cart