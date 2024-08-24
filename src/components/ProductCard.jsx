"use client";
import { CartContext } from "@/context/CartContext";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const items = products.find((p) => p.id === parseInt(product.id));

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const trimDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 8) {
      return words.slice(0, 8).join(" ") + "...";
    }
    return description;
  };
  return (
    <div class="relative max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div class="absolute z-10 top-2 left-2 bg-purple-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
          {discountPercentage}% off
        </div>

        <div className="w-full h-28 sm:h-56 relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div class="p-4">
          <h3 class="text-gray-800 font-semibold text-sm sm:text-lg">
            {product.name}
          </h3>
          <p class="text-gray-600 mt-2 hidden sm:block">
            {trimDescription(product.description)}
          </p>

          <div class="mt-2 flex justify-between items-center">
            <div>
              {/* <p className="text-gray-500 text-sm">Price</p> */}
              <div>
                <span className="text-medium font-semibold">
                  ${product.price}
                </span>
                <span className="text-sm line-through text-gray-500 ml-2">
                  ${product.originalPrice}
                </span>
              </div>
            </div>
            <button
              onClick={() => addToCart(items)}
              class="hidden sm:block bg-black/80  text-white text-sm font-semibold p-2 rounded-lg hover:bg-black"
            >
              <HiOutlineShoppingBag size={24} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
