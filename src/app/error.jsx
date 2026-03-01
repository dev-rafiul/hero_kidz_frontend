
"use client"
import Link from "next/link";
import {BiSolidErrorAlt} from "react-icons/bi"

const error = () => {
    return (
        <div className='flex min-h-screen flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center mb-8'>

            <h2 className='text-8xl mb-5'>
                ERROR 404

            </h2>
                <BiSolidErrorAlt className='text-primary text-8xl text-center flex justify-center items-center'/>

            </div>


                <h2 className='m-5'>Page Not Found</h2>

                <Link href={"/"} className='btn btn-primary btn-outline'>Go To Home</Link>
        </div>
    );
};

export default error;