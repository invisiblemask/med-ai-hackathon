"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

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
      <div className="flex flex-col flex-1 p-0 lg:p-10 lg:items-center lg:justify-center min-h-screen relative">
        <div
          className="absolute flex flex-row gap-2 items-center text-[#5D6883] top-4 lg:left-20 left-0 cursor-pointer"
          onClick={() => router.push("/")}>
          <Image
            src="/icons/left-arrow.svg"
            alt="left arrow icon"
            width={20}
            height={20}
            className="w-6 h-6 opacity-50"
          />
          Back
        </div>
        <div className="flex flex-col gap-10 my-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-normal flex flex-col gap-1">
              Welcome to MedAi. <span>Sign in to get started.</span>
            </h1>
            <p className="text-sm text-[#8181A5]">
              Enter your details to proceed further
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[414px]">
            <form onSubmit={onSubmit} className="flex flex-col gap-10">
              <Input
                label="Email :"
                placeholder="johndoe@example.com"
                type="text"
                labelPlacement="outside"
                classNames={{
                  innerWrapper: "h-[50px]"
                }}
              />

              <div className="flex flex-col gap-2">
                <Input
                  label="Password :"
                  placeholder="********"
                  type="password"
                  labelPlacement="outside"
                  classNames={{
                    input: "h-[50px]"
                  }}
                />
              </div>

              <Button
                isLoading={isLoading}
                color="primary"
                spinnerPlacement="end">
                {isLoading ? "Wait a minute" : "Sign in"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
