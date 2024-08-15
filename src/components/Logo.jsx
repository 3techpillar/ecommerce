import { logo } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="viera"
        className="w-[80px] sm:w-[100px] mix-blend-multiply"
        layout="fill"
      />
    </Link>
  );
};

export default Logo;
