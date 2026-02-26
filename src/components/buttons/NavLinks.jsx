"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const path = usePathname()
    return (
        <Link className={`btn btn-ghost ${path.startsWith(href) && "text-primary"} font-medium`} href={href}>{children}</Link>
    );
};

export default NavLinks;