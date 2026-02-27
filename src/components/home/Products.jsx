import React from 'react';
import products from "@/data/toys.json"
import ProductCard from '../cards/ProductCard';


const Products = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mb-10'>Our Products</h2>

            <div className='grid grid-cols-3'>
                {products.map(product => <ProductCard key={product.title} product={product}></ProductCard>)}
                {/* <ProductCard></ProductCard> */}
            </div>
        </div>
    );
};

export default Products;