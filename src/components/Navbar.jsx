import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-2 py-4 md:px-16 flex items-center justify-between gap-5 ">
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
              className="border-[2px] border-gray-300 w-full font-semibold  rounded-md py-3 px-3"
            />
          </div>
        </form>
        <div className="flex gap-3 sm:gap-6 items-center">
          <div className="hidden sm:block cursor-pointer">
            <BsPerson size={35} />
          </div>
          <div className="relative cursor-pointer">
            <div className="h-5 w-5 bg-red-500 absolute right-0 top-0 text-white flex items-center justify-center rounded-full">
              0
            </div>
            <IoIosHeartEmpty size={35} />
          </div>
          <Link href={"/cart"}>
            <div className="relative cursor-pointer">
              <div className="h-5 w-5 bg-red-500 absolute right-0 top-0 text-white flex items-center justify-center rounded-full">
                0
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
