import { getCart } from '@/actions/server/cart'
import Cart from '@/components/home/Cart';
import React from 'react'

const CartPage = async() => {
    const cartItems = await getCart();
    const formattedItems = cartItems.map(item => ({...item, _id:item._id.toString()}))
    

  return (
    <div className="space-y-6">
        <div className="">
            <h2 className='text-4xl font-bold border-l-8 border-primary pl-8'>My Cart</h2>




         
        </div>


        <Cart cartItem={formattedItems}></Cart>

     
    </div>
  )
}

export default CartPage