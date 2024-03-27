import Image from "next/image";
import React from "react";
import DashboardCards from "../components/DashboardCards";

export default function page() {
  return <div className="flex flex-col gap-10">
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-semibold flex flex-row gap-3 items-center">
        <h1>
          Hi, John
        </h1>
        <Image src="/icons/emoji.svg" alt="emoji icon" width={40} height={40} className="w-8 h-8" />
      </div>
      <p className="text-lg text-[#939CB2]">Welcome to your dashboard</p>
    </div>
    <DashboardCards />
  </div>;
}
