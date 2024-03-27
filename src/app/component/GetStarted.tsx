import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetStarted() {
  return (
    <div className="flex flex-col lg:flex-row m-4">
      <div className="bg-primary rounded-[20px] min-h-screen w-full lg:flex flex-col hidden items-center justify-center flex-1 gap-5">
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
      <div className="flex flex-col flex-1 p-0 lg:p-10 lg:items-center lg:justify-center min-h-screen">
        <div className="flex flex-col gap-10  mt-28">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-normal flex flex-col gap-1">
              Welcome to MedAi. <span>Sign in to get started.</span>
            </h1>
            <p className="text-sm text-[#8181A5]">
              Enter your details to proceed further
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:w-[414px]">
            <Button
              as={Link}
              href="/connect-wallet"
              color="primary"
              size="lg"
              radius="lg"
              className="cursor-pointer">
              Connect your wallet
            </Button>
            <Button
              as={Link}
              href="/login"
              color="primary"
              size="lg"
              radius="lg"
              className="cursor-pointer">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
