"use client";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [showFilter, setShowfilter] = useState(false);

  const handleShowFilter = () => {
    setShowfilter(!showFilter);
  };
  return (
    <div className="container mx-auto flex gap-4 px-3 sm:px-0">
      <aside className="w-1/6 static hidden sm:block pt-8 pr-4 border-r-2 border-gray-200">
        <h2 className="text-xl font-bold mb-4">Filter by:</h2>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Type</h3>
          <ul>
            <li>
              <input type="checkbox" id="sweatshirt" />{" "}
              <label htmlFor="sweatshirt">Top Rated</label>
            </li>
            <li>
              <input type="checkbox" id="shirt" />{" "}
              <label htmlFor="shirt">Clothes</label>
            </li>
            <li>
              <input type="checkbox" id="jacket" />{" "}
              <label htmlFor="jacket">Footwear</label>
            </li>
            <li>
              <input type="checkbox" id="accessories" />{" "}
              <label htmlFor="accessories">Jewellery</label>
            </li>
            <li>
              <input type="checkbox" id="accessories" />{" "}
              <label htmlFor="accessories">Perfume</label>
            </li>
            <li>
              <input type="checkbox" id="accessories" />{" "}
              <label htmlFor="accessories">Electronic</label>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Colour</h3>
          <ul>
            <li>
              <input type="checkbox" id="black" />{" "}
              <label htmlFor="black">Black</label>
            </li>
            <li>
              <input type="checkbox" id="white" />{" "}
              <label htmlFor="white">White</label>
            </li>
            <li>
              <input type="checkbox" id="green" />{" "}
              <label htmlFor="green">Green</label>
            </li>
            <li>
              <input type="checkbox" id="yellow" />{" "}
              <label htmlFor="yellow">Yellow</label>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Size</h3>
          <ul>
            <li>
              <input type="checkbox" id="small" />{" "}
              <label htmlFor="small">Small</label>
            </li>
            <li>
              <input type="checkbox" id="medium" />{" "}
              <label htmlFor="medium">Medium</label>
            </li>
            <li>
              <input type="checkbox" id="large" />{" "}
              <label htmlFor="large">Large</label>
            </li>
            <li>
              <input type="checkbox" id="xlarge" />{" "}
              <label htmlFor="xlarge">X-Large</label>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <input type="range" min="0" max="500" step="10" />
        </div>

        <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700">
          Apply
        </button>
      </aside>

      {/* Main Content - Product Grid */}
      <main className="w-full my-8 sm:w-5/6">
        <div className="w-full flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">All Products</h1>
          <button className="block sm:hidden" onClick={handleShowFilter}>
            Filter
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {showFilter && (
        <div className="absolute z-10 right-2 top-32 mt-2 w-52 p-4 bg-white border border-gray-200 rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-2">Filter by:</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-1">Type</h3>
            <ul>
              <li>
                <input type="checkbox" id="sweatshirt" />{" "}
                <label htmlFor="sweatshirt">Top Rated</label>
              </li>
              <li>
                <input type="checkbox" id="shirt" />{" "}
                <label htmlFor="shirt">Clothes</label>
              </li>
              <li>
                <input type="checkbox" id="jacket" />{" "}
                <label htmlFor="jacket">Footwear</label>
              </li>
              <li>
                <input type="checkbox" id="accessories" />{" "}
                <label htmlFor="accessories">Jewellery</label>
              </li>
              <li>
                <input type="checkbox" id="accessories" />{" "}
                <label htmlFor="accessories">Perfume</label>
              </li>
              <li>
                <input type="checkbox" id="accessories" />{" "}
                <label htmlFor="accessories">Electronic</label>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-1">Colour</h3>
            <ul>
              <li>
                <input type="checkbox" id="black" />{" "}
                <label htmlFor="black">Black</label>
              </li>
              <li>
                <input type="checkbox" id="white" />{" "}
                <label htmlFor="white">White</label>
              </li>
              <li>
                <input type="checkbox" id="green" />{" "}
                <label htmlFor="green">Green</label>
              </li>
              <li>
                <input type="checkbox" id="yellow" />{" "}
                <label htmlFor="yellow">Yellow</label>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-1">Size</h3>
            <ul>
              <li>
                <input type="checkbox" id="small" />{" "}
                <label htmlFor="small">Small</label>
              </li>
              <li>
                <input type="checkbox" id="medium" />{" "}
                <label htmlFor="medium">Medium</label>
              </li>
              <li>
                <input type="checkbox" id="large" />{" "}
                <label htmlFor="large">Large</label>
              </li>
              <li>
                <input type="checkbox" id="xlarge" />{" "}
                <label htmlFor="xlarge">X-Large</label>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price</h3>
            <input type="range" min="0" max="500" step="10" />
          </div>

          <button
            onClick={() => setShowfilter(false)}
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
