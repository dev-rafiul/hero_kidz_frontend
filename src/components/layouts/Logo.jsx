import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <button href={"/"} className='flex items-center gap-2'>
            <Image alt='logo_hero_kids' src={"/assets/logo.png"} width={40} height={40}/>
            <h2 className='text-xl font-bold'>Hero 
               <span className='text-primary'> Kidz </span> 
            </h2>
        </button>
    )
};

export default Logo;