"use client";

import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="bg-primary text-white overflow-auto h-screen lg:inset-y-0 xl:block hidden col-span-3 xl:col-span-2 sticky top-0">
      <div className="flex h-full w-full flex-col py-4 px-5">
        <div className="flex items-center justify-center text-xl font-bold pt-8">Xcel</div>
        <div className="h-full overflow-y-auto flex flex-col gap-2 scroll mt-32">
          {links.map((link, index) => {
            const activePath = link.href.split("/")[1];
            const active = pathname.startsWith(`/${activePath}`);
            return (
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-5 transition-all duration-300 delay-150 ease-in-out",
                  active && "text-primary bg-white rounded-lg"
                )}
                key={index}>
                <div className="flex flex-row items-center gap-2">
                  <Image src={active ? link.activeIcon : link.icon} alt="icon" width={40} height={40} className="w-6 h-6" />
                  {link?.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}