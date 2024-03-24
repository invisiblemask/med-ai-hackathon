"use client";

import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col lg:flex-row m-4">
      <div className="bg-primary rounded-[20px] w-full lg:flex flex-col hidden items-center justify-center flex-1 gap-5">
        <Image
          src="/images/login-logo.svg"
          alt="login image"
          width={1200}
          height={980}
          className="w-auto h-auto"
        />
        <h1 className="text-4xl text-center text-white w-3/5 leading-relaxed">
          Get Easy access to patient images and reports
        </h1>
      </div>
      <div className="flex flex-col flex-1 p-0 lg:p-10 lg:items-center lg:justify-center relative">
        <div className="flex flex-col gap-10  mt-28">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-normal flex flex-col gap-1">
              Reset password
            </h1>
            <p className="text-sm text-[#8181A5]">Enter your new password</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[414px]">
            <form onSubmit={onSubmit} className="flex flex-col gap-10">
              <Input
                label="New Password"
                placeholder="********"
                type="password"
                labelPlacement="outside"
                classNames={{ inputWrapper: "h-[50px]" }}
              />
              <Input
                label="Confirm Password"
                placeholder="********"
                type="password"
                labelPlacement="outside"
                classNames={{ inputWrapper: "h-[50px]" }}
              />

              <Button
                isLoading={isLoading}
                color="primary"
                spinnerPlacement="end">
                {isLoading ? "Wait a minute" : "Reset Password"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
