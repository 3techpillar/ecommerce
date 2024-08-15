import { logo } from "@/data/assets";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img
        src={logo}
        alt="viera"
        className="w-[80px] sm:w-[100px] mix-blend-multiply"
      />
    </Link>
  );
};

export default Logo;
