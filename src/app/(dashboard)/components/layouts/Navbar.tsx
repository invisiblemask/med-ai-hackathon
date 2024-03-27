"use client"

import React from "react";
import Profile from "../Profile";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname()
  const path = pathname.split("/")[1]

  return <div className="sticky top-0 xl:h-28 lg:h-24 z-50 bg-white h-20 flex-row justify-between w-full flex items-center">
    <div className="text-xl flex flex-row gap-2 items-center capitalize">
      {path}
    </div>
    <div className="flex flex-row gap-4 justify-center items-center">
      <div className="relative">
        <Image src="/icons/bell.svg" alt="notification icon" width={40} height={40} className="w-7 h-7" />
      </div>
      <Profile />
    </div>
  </div>
}
