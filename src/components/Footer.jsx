import { payment } from "@/data/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Popular Categories */}
          <div>
            <h3 className="w-fit text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Popular Categories
            </h3>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Fashion
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Electronic
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Cosmetic
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Health
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Watches
              </li>
            </ul>
          </div>
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Products
            </h3>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Prices Drop
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                New Products
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Best Sales
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Contact Us
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Sitemap
              </li>
            </ul>
          </div>
          {/* Our Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Our Company
            </h3>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Delivery
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Legal Notice
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Terms And Conditions
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                About Us
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Secure Payment
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Services
            </h3>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Prices Drop
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                New Products
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Best Sales
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Contact Us
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                Sitemap
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Contact
            </h3>
            <ul>
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
        </div>
        <div
          className="mt-10 flex gap-3
         flex-col justify-center items-center"
        >
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
