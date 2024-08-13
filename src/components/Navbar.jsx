"use client";
import React, { useContext, useState } from "react";

import { IoBagHandleOutline, IoPersonCircleOutline } from "react-icons/io5";

import { BsPerson } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

import Link from "next/link";
import Logo from "./Logo";

import { CartContext } from "@/context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    // Handle logout functionality here
    console.log("Logout clicked");
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-2 py-4 md:px-16 flex items-center justify-between gap-5">
        <div className="flex items-center justify-center gap-20">
          <Logo />
        </div>
        <form className="w-[75%] hidden sm:flex justify-center relative">
          <div className="relative w-[70%]">
            <FaSearch
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Enter your product name..."
              className="border-[2px] border-gray-300 w-full font-semibold rounded-md py-3 px-3"
            />
          </div>
        </form>
        <div className="flex gap-3 sm:gap-6 items-center">
          <div className="relative">
            <div
              className="cursor-pointer flex items-center"
              onClick={toggleDropdown}
            >
              <BsPerson size={35} />
            </div>
            {isDropdownOpen && (
              <div className="absolute z-10 right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link href={"/"}>
                  <button className="w-full flex items-center gap-3 text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <IoPersonCircleOutline size={24} /> Profile
                  </button>
                </Link>

                <Link href={"/login"}>
                  <button className="w-full flex items-center gap-3 text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <CgLogOut size={24} /> Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
          <Link href={"/cart"}>
            <div className="relative cursor-pointer">
              <div className="h-5 w-5 bg-red-500 absolute right-0 top-0 text-white flex items-center justify-center rounded-full">
                {cartItems.length}
              </div>
              <IoBagHandleOutline size={35} />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
