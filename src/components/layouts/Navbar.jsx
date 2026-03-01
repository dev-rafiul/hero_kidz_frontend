
// "use client"
// import React, { useState } from "react";
// import LogIn from "./LogIn";
// import SignUpbtn from "./SignUpbtn";
// import Logo from "./Logo";
// import Link from "next/link";
// import NavLinks from "../buttons/NavLinks";
// import {FiShoppingCart} from "react-icons/fi"
// import CartBtn from "./CartBtn";


// const Navbar = () => {


// const [open, setOpen] = useState(false)

//   const nav = <>
//   <li><NavLinks href={"/"}>Home</NavLinks>  </li>
//   <li><NavLinks href={"/products"}>Products</NavLinks>  </li>
//   <li><NavLinks href={"/blog"}>blog</NavLinks>  </li>
//   <li><NavLinks href={"/contact"}>contact</NavLinks>  </li>
//   </>


//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
          
//           <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>

//           </label>
          


          
//           <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
//           ">
//             {nav}
//           </ul>
//         </div>



 


//         <Logo />
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {nav}
//         </ul>
//       </div>
//       <div className="navbar-end gap-3">

//         <Link href={"/cart"} className="text-xl h-[50px] w-[50px] border-none">
       


// <CartBtn></CartBtn>



//         </Link>

//         <Link href={"/register"}>
//         <SignUpbtn />
//         </Link>
//         <Link href={"/login"}>
//         <LogIn />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";





// import LogIn from "./LogIn";
import SignUpbtn from "./SignUpbtn";
import LogIn from "./LogIn";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
// import Logo from "./Logo";
// import Link from "next/link";
// import NavLinks from "../buttons/NavLinks";
// import {FiShoppingCart} from "react-icons/fi"
// import CartBtn from "./CartBtn";




// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  {
    label: "Learn",
    href: "#",
    dropdown: ["Tutorials", "Documentation", "Guides", "Videos"],
  },
  { label: "Contact", href: "/contact" },
];

// ─── Dropdown Item ────────────────────────────────────────────────────────────
const DropdownMenu = ({ items }) => (
  <div
    className="
      absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
      bg-[#0d0d10]/95 backdrop-blur-2xl
      border border-white/[0.07] rounded-2xl p-2 min-w-[160px]
      shadow-[0_24px_64px_rgba(0,0,0,0.55)]
      opacity-0 pointer-events-none translate-y-[-6px]
      group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
      transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
      z-50
    "
  >
    {items.map((item) => (
      <Link
        key={item}
        href="#"
        className="
          block px-3.5 py-2.5 rounded-xl text-[13px] font-medium
          text-white/60 hover:text-white hover:bg-white/[0.07]
          transition-all duration-200
        "
      >
        {item}
      </Link>
    ))}
  </div>
);

// ─── Nav Link ─────────────────────────────────────────────────────────────────
const NavItem = ({ label, href, dropdown, pathname }) => {
  const isActive = pathname === href;

  return (
    <div className="relative group">
      <Link
        href={href}
        className={`
          flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium
          tracking-wide transition-all duration-250
          ${
            isActive
              ? "text-primary/95 bg-primary/10"
              : "text-black/60 hover:text-primary hover:bg-white/[0.08]"
          }
        `}
      >
        {label}
        {dropdown && (
          <IoChevronDownOutline
            className="w-3 h-3 opacity-60 transition-transform duration-300 group-hover:rotate-180"
          />
        )}
      </Link>

      {dropdown && <DropdownMenu items={dropdown} />}
    </div>
  );
};

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const ctaRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Magnetic CTA effect
  const handleCtaMouseMove = (e) => {
    const btn = ctaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
    btn.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
  };

  const handleCtaMouseLeave = () => {
    if (ctaRef.current)
      ctaRef.current.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <>
      {/* ── Navbar ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <nav
          className={`
            pointer-events-auto
            flex items-center justify-between
            w-full max-w-[1130px]
            pl-5 pr-2 py-2 rounded-full
            border transition-all duration-500
            ${
              scrolled
                ? "bg-[#fdf5e6]/95 border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                : "bg-[#fefffc]/0 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            }
            backdrop-blur-2xl
          `}
          style={{ willChange: "background, box-shadow" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* <span
              className="w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]"
              style={{ animation: "logoPulse 2.5s ease-in-out infinite" }}
            /> */}




            <span className="font-bold text-[17px] tracking-[-0.04em] select-none">
              <Logo></Logo>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} {...link} pathname={pathname} />
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Cart */}
            <Link
              href="/cart"
              className="
                relative flex items-center justify-center
                 rounded-full
                 border border-white/[0.08]
                text-primary/90 
                hover:text-[#fc4000]
              "
            >
              {/* <FiShoppingCart className="w-4 h-4" /> */}
              <CartBtn></CartBtn>
              {/* Badge */}
             
            </Link>

            {/* Sign up */}
            <Link
              href="/register"
              className="
                px-[18px] py-2 rounded-full text-[13px] font-medium
               
                hover:bg-white/[0.07] hover:border-white/30 hover:text-white
                transition-all duration-250
              "
            >
              
            <SignUpbtn></SignUpbtn>
              {/* Sign up */}
            </Link>



            {/* CTA — magnetic */}
            <Link
              href="/login"
              ref={ctaRef}
              onMouseMove={handleCtaMouseMove}
              onMouseLeave={handleCtaMouseLeave}
              className="
                px- py- rounded-full text-[16px] font-semibold text-white
                bg-gradient-to-br from-indigo-500 to-violet-600
                shadow-[0_4px_18px_rgba(245,101,39,0.5)]
                hover:shadow-[0_8px_28px_rgba(239,129,81,0.8)]
                transition-[box-shadow,background] duration-300
              "
              style={{ transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease" }}
            >
              {/* Log&apos; In */}
              <LogIn></LogIn>
            </Link>
          </div>

          {/* Mobile — cart + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gray-900/[0.06] border border-white/[0.08] text-primary/90"
            >

              


              <FiShoppingCart className="w-5 h-5" />
              {/* <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-indigo-500 rounded-full text-[8px] font-bold flex items-center justify-center border-2 border-[#0e0e10]">
                3
              </span> */}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex flex-col justify-center items-center gap-[5px]
                w-9 h-9 rounded-xl
                bg-black/[0.09] border border-black/[0.08]
                text-primary/80 hover:bg-white/[0.1]
                transition-all duration-200
              "
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX className="w-4 h-4" />
              ) : (
                <HiOutlineMenuAlt3 className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={`
          fixed top-[76px] inset-x-4 z-40
          bg-[#e7eae5]/97 backdrop-blur-2xl
          border border-white/[0.07] rounded-2xl p-3
          shadow-[0_24px_80px_rgba(0,0,0,0.65)]
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          lg:hidden
          ${
            mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col gap-0.5">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                px-4 py-3 rounded-xl text-[15px] font-medium
                text-[#252324] hover:text-[#07000b] hover:bg-[#fdf5e6]/55
                transition-all duration-200
              "
              style={{
                animationDelay: `${i * 40}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="h-px bg-white/[0.06] my-2" />

        <div className="flex gap-2 px-1 pb-1">
          <Link
            href="/register"
            className="
              flex-1 text-center py-2.5 rounded-xl text-[13px] font-semibold bg-primary
              text-white border border-primary
              hover:bg-white/15 hover:text-primary
              transition-all duration-200
            "
          >
            Sign up

          </Link>
          <Link
            href="/login"
            className="
              flex-1 text-center py-2.5 rounded-xl btn btn-primary btn-outline
            "
          >
            LogIn &apos; Now
          </Link>
        </div>
      </div>

      {/* Logo pulse keyframe */}
      <style>{`
        @keyframes logoPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(99,102,241,0.65); }
          50%       { box-shadow: 0 0 22px rgba(168,85,247,0.85); }
        }
      `}</style>
    </>
  );
}