import React from "react";
import { camphor, camphorDesc, phoneVid, spIphone } from "@/data/assets";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import SponseredSection from "./SponseredSection";

const Phones = () => {
  const smartPhoneCategory = products.filter(
    (product) => product.category === "smartphone"
  );

  const featuredProduct = smartPhoneCategory[0];

  return (
    <div id="smartphones">
      <div className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden">
        <video
          className="w-full h-full object-cover object-bottom"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={phoneVid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-5 md:p-10 z-10">
          <h1 className="text-white text-2xl text-center md:text-5xl font-bold">
            Explore Smartphones
          </h1>
          <p className="text-white text-base md:text-xl max-w-6xl text-center mt-2">
            explore the best deals of smartphones
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-7 px-3 sm:px-0">
        <h1 className="lg:text-4xl md:text-3xl text-2xl lg:my-5 my-2 font-bold">
          Latest Smartphones
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {smartPhoneCategory.map((category) => (
            <ProductCard key={category.id} product={category} />
          ))}
        </div>

        <div className="my-8 w-full">
          <SponseredSection video={spIphone} product={featuredProduct} />
        </div>
      </div>
    </div>
  );
};

export default Phones;
