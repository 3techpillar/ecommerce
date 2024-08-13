"use client";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { products } from "@/data/products";
import Image from "next/image";

const ProductPage = ({ params }) => {
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(params.id));
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row">
        {/* Left Side: Product Images */}
        <div className="w-full sm:w-1/2">
          {/* Main Image */}
          <div className="mb-4 w-[600px] h-[600px] overflow-hidden">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-lg"
            />
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
        <div className="w-full sm:w-1/2 pl-8">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-red-600 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-12 text-center border border-gray-300 rounded"
            />
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-6 py-2 rounded ml-4"
            >
              Add to Cart
            </button>
          </div>

          <div className="flex space-x-4 mb-4">
            <button className="border border-gray-300 rounded px-4 py-2">
              Add to Wishlist
            </button>
            <button className="border border-gray-300 rounded px-4 py-2">
              Add to Compare
            </button>
          </div>

          <div className="flex space-x-2 text-gray-600">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
