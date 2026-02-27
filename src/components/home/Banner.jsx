import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';



const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5 mt-18'>
                <h2 className={`${fontBangla.className} text-5xl font-semibold leading-20`}>“রান্না হোক সহজ, মুহূর্ত হোক বিশেষ।” <span className='text-primary'>টেকসই মান, নির্ভরতার প্রতিশ্রুতি</span></h2>
                <p className=''>Buy Every Kitchen items upto 15% discount</p>
                <button className='btn btn-primary btn-outline'> Explore Products</button>
            </div>
        <div className='flex-1'>
        <Image src={"/assets/hero.png"} width={600} height={400} alt='hero'/>
        </div>
        </div>
);};
export default Banner;