import { payment } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Popular Categories */}
          <div className="col-span-1">
            <h3 className="w-fit text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Popular Categories
            </h3>
            <ul>
              <Link href={"/products"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  All Products
                </li>
              </Link>
              <Link href={"/#featured"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Feature Products
                </li>
              </Link>
              <Link href={"/#spritiual"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Spiritual Products
                </li>
              </Link>
              <Link href={"/#smartphones"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Smartphones
                </li>
              </Link>
            </ul>
          </div>
          {/* Our Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Our Company
            </h3>
            <ul>
              <Link href={"/privacy"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Privacy Policy
                </li>
              </Link>
              <Link href={"term-condition"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Terms And Conditions
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  About Us
                </li>
              </Link>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Contact
            </h3>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-map-marker-alt"></i>
                <a href="https://www.3TechPillar.com" target="_blank">3TechPillar.com</a>
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-map-marker-alt"></i>
                <a href="https://www.3TechPillar.com" target="_blank">3TechPillar.com</a>
                Gaur City Center, Greater Noida, 000021
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-phone-alt"></i>
                (+91) 1800 3454 2349
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-envelope"></i>
                info@3techpillar.com
              </li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div className="col-span-2">
            <h3 className="w-fit text-lg font-bold mb-4  inline-block">
              Subscribe to our newsletter and <br /> Get 10% off
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-2 bg-transparent border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-white text-black py-2 rounded-md hover:bg-[#ebf7ff] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-gray-400 text-sm">
              Get regular updates on our product with our newsletter.
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-3 flex-col justify-center items-center">
          {/* Payment methods */}
          <div className="flex space-x-4">
            <Image
              src={payment}
              alt="payment"
              className="h-8"
              width={350}
              height={32}
            />
          </div>
          <p className="text-sm text-gray-400">
            Copyright © Veira All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
