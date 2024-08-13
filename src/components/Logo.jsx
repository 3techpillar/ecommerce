import { logo } from "@/data/assets";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img src={logo} alt="viera" className="w-[100px] sm:w-150" />
    </Link>
  );
};

export default Logo;
