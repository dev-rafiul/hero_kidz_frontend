import Products from '@/components/home/Products';
import React from 'react';
// export const metadata = {
//     title: "All Products",
// }


export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Hero Kidz",
      description: "The product you are looking for does not exist.",
    };
  }

  const title = product.title || "Hero Kidz Product";
  const description =
    product.description?.slice(0, 160) ||
    "Educational toy designed to help kids learn through play.";

  const image =
    product.image || "https://i.ibb.co.com/Ld7J2ZYq/image.png";

  const url = `https://herokidzfrontend.vercel.app/product/${id}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Hero Kidz",
      type: "product",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}





const ProductsPage = () => {




    return (
        <div>
            <Products></Products>
        </div>
    );
};

export default ProductsPage;