"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Nav() {
  const navItems = ["Desitnations", "Hotels", "Flights", "Bookings", "Login"];
  const navStyles = `hover:border-2 hover:border-black border-2 border-white hover:py-2 hover:px-4 py-2 px-4 rounded-sm cursor-pointer text-center ${poppins.className}`;

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 py-6 md:justify-between ">
      <Link href={"/"}>
        <Image src="/logo.svg" width={80} height={80} alt="Site Logo" />
      </Link>
      <div>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item} className={navStyles}>
              {item}
            </li>
          ))}
          <li className="flex items-center py-2 px-4">
            <span>EN</span>
            <CaretDownIcon size={18} />
          </li>
        </ul>
      </div>
    </div>
  );
}
