import { getCart } from '@/actions/server/cart';
import React from 'react';

import CheckOut from './../../components/home/CheckOut';

const checkOutPage = async() => {

    const cartItems = await getCart();
    const formattedItems = cartItems.map(item => ({...item, _id:item._id.toString()}))


    return (
        <div>

<div className="">
            <h2 className='text-4xl font-bold border-l-8 border-primary pl-8'>Check Out</h2>
        </div>



            <CheckOut cartItems={formattedItems}></CheckOut>
        </div>
    );
};

export default checkOutPage;