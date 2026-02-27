
"use client"
import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUpbtn from "./SignUpbtn";
import Logo from "./Logo";
import Link from "next/link";
import NavLinks from "../buttons/NavLinks";
import {FiShoppingCart} from "react-icons/fi"
import CartBtn from "./CartBtn";


const Navbar = () => {


const [open, setOpen] = useState(false)

  const nav = <>
  <li><NavLinks href={"/"}>Home</NavLinks>  </li>
  <li><NavLinks href={"/products"}>Products</NavLinks>  </li>
  <li><NavLinks href={"/blog"}>blog</NavLinks>  </li>
  <li><NavLinks href={"/contact"}>contact</NavLinks>  </li>
  </>


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          
          <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

          </label>
          


          
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
          ">
            {nav}
          </ul>
        </div>



 


        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>
      <div className="navbar-end gap-3">

        <Link href={"/cart"} className="text-xl h-[50px] w-[50px] border-none">
        {/* <FiShoppingCart></FiShoppingCart> */}


<CartBtn></CartBtn>



        </Link>

        <Link href={"/register"}>
        <SignUpbtn />
        </Link>
        <Link href={"/login"}>
        <LogIn />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
