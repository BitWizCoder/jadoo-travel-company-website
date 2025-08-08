"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Nav() {
  const navItems = ["Desitnations", "Hotels", "Flights", "Bookings", "Login"];
  const navStyles =
    "hover:border-2 hover:border-black border-2 border-white hover:py-3 hover:px-2 py-3 px-2 rounded-sm cursor-pointer text-center";

  return (
    <div className="flex justify-between items-center py-8">
      <div>
        <Image src="/logo.svg" width={80} height={80} alt="Site Logo" />
      </div>
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
