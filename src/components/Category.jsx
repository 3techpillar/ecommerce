import React from "react";
import { categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="lg:text-4xl md:text-3xl text-2xl lg:my-5 my-2 font-bold">
        Categories
      </h1>
      <div className="flex justify-evenly overflow-x-auto space-x-4 py-2">
        {categories.map((category) => (
          <Link key={category.id} href={"/products"}>
            <div className="flex items-center justify-center flex-col w-[100px] h-[100px]">
              <img src={category.image} alt={category.title} width={80} />

              <h1>{category.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
