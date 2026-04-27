import React, { useState } from 'react'
import CartItem from '../cards/CartItem'

const Cart = ({cartItem=[]}) => {
    const [items, setItems] = useState(cartItem)
    return (
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item?._id || item?.productId} item={item} />
          ))}
        </div>
    )
}

export default Cart