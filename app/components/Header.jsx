import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-[20px] bg-[#000000] text-white">
      <div className="navbar max-w-[92%] mx-auto flex justify-between items-center px-[20px]">
        <Image alt="site-logo" className="h-auto w-auto" src="/logoipsum.svg" width={170} height={70} alt="Logo" />
        <div className="nav-links flex gap-8 text-[18px]">
            <Link href="/" >Media</Link>
            <Link href="/" >Blogs</Link>
            <Link href="/" >About</Link>
            <Link href="/" >Careers</Link>
        </div>
        <button className="py-[10px] px-[28px] bg-[#7b61ff] ">
            Contact US
        </button>
      </div>
    </div>
  );
};

export default Header;
