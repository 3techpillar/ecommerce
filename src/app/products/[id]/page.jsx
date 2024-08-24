"use client";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { products } from "@/data/products";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductPage = ({ params }) => {
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(params.id));
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const featuredProducts = products.filter((product) => product.featured);

  if (!product) {
    return <p>Product not found</p>;
  }

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            } mr-1`}
          />
        ))}
      </div>
    );
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-5 flex-col sm:flex-row">
        {/* Left Side: Product Images */}
        <div className="w-full sm:w-1/2">
          {/* Main Image */}
          <div className="mb-4 w-full sm:w-[400px] md:w-[400px] lg:w-[600px] h-full sm:h-[300px] md:h-[550px] overflow-hidden rounded-lg">
            <img src={selectedImage} alt={product.name} />
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <div key={index} className="cursor-pointer">
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-lg border border-gray-300"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full sm:w-1/2 mt-8">
          <p className="text-gray-500 uppercase mb-2 font-semibold">
            {product.category}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-2">
            {product.name}
          </h1>
          <div className="my-2">
            <StarRating rating={product.rating} />
          </div>
          <div className="">
            <p className="text-gray-600 font-base text-xl hidden sm:block">
              Price
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-xl sm:text-3xl font-bold text-red-600 mb-4">
                ${product.price}
              </p>
              <p className="text-base sm:text-xl font-base line-through text-gray-400 mb-4">
                ${product.originalPrice}
              </p>
              <p>({discountPercentage}% off)</p>
            </div>
          </div>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center justify-between mb-4 mt-6 px-5">
            <div className="flex gap-4 items-center">
              <button onClick={handleDecrement} className="text-4xl">
                -
              </button>
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm text-xl">
                {quantity}
              </div>
              <button onClick={handleIncrement} className="text-4xl">
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(product)}
              class="bg-black/80  text-white text-sm font-semibold p-2 rounded-lg hover:bg-black"
            >
              <HiOutlineShoppingBag size={30} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 mt-6 pt-4">
        <div id="featured">
          <h1 className="lg:text-4xl md:text-3xl text-2xl lg:my-5 my-2 font-bold">
            Related Products
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
