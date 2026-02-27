import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}) {

    const {title, image, price, ratings, reviews, sold, _id} = product;


  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative w-[340px] rounded-3xl bg-gradient-to-b from-[#22252d] to-[#191c22] shadow-2xl overflow-hidden">

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
          {price} Taka
        </div>

        {/* Top Section */}
        <div className="relative flex justify-center items-center pt-14 pb-10">

          {/* Glow Background */}
          <div className="absolute w-56 h-56 bg-blue-500/20 blur-3xl rounded-full"></div>

          {/* Product Image */}
          <Image
            src={image} // put your watch image inside public folder
            alt={title}
            width={300}
            height={250}
            className="relative w-48 drop-shadow-2xl"
          />
        </div>

        {/* Bottom Content */}
        <div className="bg-[#2a2d35] rounded-t-3xl px-6 py-8">

          <h2 className="text-white text-xl font-bold tracking-wide">
            {title}
          </h2>

          <p className="text-gray-400 text-sm mt-2">
           {reviews}
          </p>

          {/* Rating */}
          <div className="flex gap-1 mt-3 text-blue-400">
            ★ ★ ★ ★ ☆
          </div>

          {/* Divider + Info */}
          <div className="grid grid-cols-2 gap-6 mt-6 text-sm">
            <div>
              <h4 className="text-blue-400 font-semibold">YOUR TITLE</h4>
              <p className="text-gray-400 text-xs mt-1">
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div>
              <h4 className="text-blue-400 font-semibold">YOUR TITLE</h4>
              <p className="text-gray-400 text-xs mt-1">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/50">
            ADD TO CART
          </button>

          <Link href={`/products/${_id}`} className="btn btn-primary btn-outline w-full rounded-4xl mt-5">View Details</Link>

          {/* <Link
          href={`/products/${_id}`}
          className="btn btn-primary btn-outline mt-4 w-full"
        >
          View Details
        </Link> */}

        </div>
      </div>
    </div>
  );
}
