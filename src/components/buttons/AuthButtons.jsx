"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import LogIn from '../layouts/LogIn';
import SignUpbtn from '../layouts/SignUpbtn';


const AuthButtons = () => {


    const session = useSession()

    return (
        



 <div className="flex items-center gap-3">
      {session.status == "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="btn btn-primary"
        >
          LogOut
        </button>
      ) : (
        <>
          <Link
            href="/register"
            className="px-[18px] py-2 rounded-full text-[13px] font-medium hover:bg-white/[0.07] hover:border-white/30 hover:text-white transition-all duration-250"
          >
            <SignUpbtn />
          </Link>

          <Link href="/login">
            <LogIn />
          </Link>
        </>
      )}
    </div>



    );
};

export default AuthButtons;