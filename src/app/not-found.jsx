import Link from 'next/link';
import React from 'react';

const Error404 = () => {
    return (
        <div className='flex min-h-screen flex-col justify-center items-center'>
            <h2>
                ERROR
                </h2>



                <h2>Page Not Found</h2>

                <Link href={"/"} className='btn'>Go To Home</Link>
        </div>
    );
};

export default Error404;