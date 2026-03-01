import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-7xl mb-15'>LOADING......</h2>
            <Logo></Logo>
        </div>
    );
};

export default loading;