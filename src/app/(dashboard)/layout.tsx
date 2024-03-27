import React from "react";
import { Navbar, Sidebar } from "./components/layouts";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="xl:grid xl:grid-cols-11">
      <Sidebar />
      <div className="flex flex-col w-full overflow-clip xl:col-span-9 min-h-screen xl:px-14 lg:px-8 px-4">
        <Navbar />
        <div className="mb-9 mt-10">
          {children}
        </div>
      </div>
    </div>
  );
}
