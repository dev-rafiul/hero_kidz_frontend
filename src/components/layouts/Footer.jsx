// import Link from "next/link";

// export default function Footer() {
//   return (
//     <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#252324] via-[#181a18] to-[#252324]">

//       {/* Hero Section */}
//       <section className="text-center pt-32 px-6">
//         <h1 className="text-4xl md:text-6xl font-semibold text-gray-300 leading-tight">
//           Discover the future of online shopping.
//         </h1>

//         <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-8 mb-5">
//           Shop smarter, save more, and enjoy premium products delivered
//           straight to your door.
//         </p>

//         <Link href="/products">
//           <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition duration-300 shadow-md ">
//             Shop Now
//           </button>
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className=" text-white px-10 md:px-20 py-16 mt-20">
//         <div className="flex flex-col md:flex-row justify-between gap-12">

        


//           {/* Logo Section */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">HERO <span className="text-2xl text-primary">KIDZ</span></h2>
            
//           </div>







//           {/* Links */}
//           <div className="flex gap-16">
//             <div>
//               <h4 className="font-semibold mb-4">Shop</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li className="hover:text-white cursor-pointer">New Arrivals</li>
//                 <li className="hover:text-white cursor-pointer">Best Sellers</li>
//                 <li className="hover:text-white cursor-pointer">Categories</li>
//                 <li className="hover:text-white cursor-pointer">Deals</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li className="hover:text-white cursor-pointer">About</li>
//                 <li className="hover:text-white cursor-pointer">Contact</li>
//                 <li className="hover:text-white cursor-pointer">Careers</li>
//                 <li className="hover:text-white cursor-pointer">Support</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li className="hover:text-white cursor-pointer">About</li>
//                 <li className="hover:text-white cursor-pointer">Contact</li>
//                 <li className="hover:text-white cursor-pointer">Careers</li>
//                 <li className="hover:text-white cursor-pointer">Support</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li className="hover:text-white cursor-pointer">About</li>
//                 <li className="hover:text-white cursor-pointer">Contact</li>
//                 <li className="hover:text-white cursor-pointer">Careers</li>
//                 <li className="hover:text-white cursor-pointer">Support</li>
//               </ul>
//             </div>
           
//           </div>
//         </div>
//         <div className="mt-20">
//           <h2 className="text-8xl text-center font-semibold">HERO <span className="text-primary font-semibold">KIDZ</span> </h2>
//           <p className="text-lg text-center text-gray-400 mt-12">
//               ©2026 dev_rafiul. All rights reserved.
//             </p>
//         </div>
//       </footer>

//     </main>
//   );
// }





export default function Footer() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] relative overflow-hidden">
    


      {/* Footer Section */}
      <footer className="px-10 md:px-24 pt-24 pb-40 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-sm text-gray-800">

          {/* Logo */}
          <div>
            <h2 className="font-semibold text-lg flex items-center gap-2">
              ⚙️HERO <span className="text-primary font-bold text-2xl ">KIDZ</span>
            </h2>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-gray-700">
              <li>How it works</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-gray-700">
              <li>About</li>
              <li>Careers</li>
              <li>Brand</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Download</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-700">
              <li>X (Twitter)</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 text-xs text-center text-gray-600">
          © 2026 dev_rafiul, Inc. All rights reserved.
        </div>

      </footer>


<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/10 to-transparent blur-2xl">
      </div>
      {/* Huge Background Typography */}
      <h1 className="absolute bottom-[-20px] right-[-2px] text-[90px] md:text-[140px] lg:text-[300px] font-bold text-black opacity-90  pointer-events-none select-none
      
      
      ">
        HERO <span className="text-primary">KIDZ</span>
      </h1>

    </main>
  );
}
