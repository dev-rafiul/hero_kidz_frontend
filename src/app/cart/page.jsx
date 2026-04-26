import { getCart } from '@/actions/server/cart'
import CartItem from '@/components/cards/CartItem';
import React from 'react'

const CartPage = async() => {
    const cartItems = await getCart();
    

  return (
    <div className="space-y-6">
        <div className="">
            <h2 className='text-4xl font-bold border-l-8 border-primary pl-8'>My Cart</h2>
            <p className="py-3">
                <span className='text-primary font-semibold'>{cartItems.length}</span> items Found in the Cart
            </p>
        </div>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item?._id || item?.productId} item={item} />
          ))}
        </div>
    </div>
  )
}

export default CartPage