"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const NavLinks = ({href, children}) => {
    const path = usePathname()
  return (
    
      <div className="tab-container">
      <Link className={`btn border-none ${path.startsWith(href) && "text-primary"} font-medium`} href={href}>{children}</Link>
      </div>
    
  );
}
export default NavLinks