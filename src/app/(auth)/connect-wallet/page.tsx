"use client";

import { useSDK } from "@metamask/sdk-react";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";



export default function page() {
  const router = useRouter();
  const [account, setAccount] = useState<any>();
  const { sdk, connected } = useSDK();
  const {walletLogin} = useAuth()

  const connect = async () => {
    try {
      const accounts: any = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };
  

useEffect(()=>{
  if(connected){
    connect()
    if(account) {
      const {user, status} = walletLogin({address: account})
      if (user && status === 201 ){
        router.push("/dashboard")
      } else {
        router.push("/update-user")
      }
    } 
  }
}, [account, connected])

  return (
    <div className="flex flex-col lg:flex-row m-4">
      <div className="bg-primary rounded-[20px] min-h-screen w-full lg:flex flex-col hidden items-center justify-center flex-1 gap-5">
        <Image
          src="/images/wallet-page-image.svg"
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
        <div className="flex flex-col gap-10 mt-28">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-normal flex flex-col gap-1">
              Connect your wallet
            </h1>
            <p className="text-sm text-[#8181A5]">
              Connect with one of wallets providers or create a new one.
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:w-96">
            <div className="bg-[#F4F6F9] h-[76px] flex flex-row items-center justify-between px-8 rounded-lg cursor-pointer" onClick={connect}>
              <div className="flex flex-row gap-4 items-center bg-gradient-to-br from-teal-500 to-teal-400 bg-clip-text text-transparent">
                <Image
                  src="/icons/MetaMask_Fox 1.svg"
                  alt="metamask icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                Metamask
              </div>
              <Image
                src="/icons/right-arrow.svg"
                alt="right arrow"
                width={20}
                height={20}
                className="w-6 h-6"
              />
            </div>
            <div className="bg-[#F4F6F9] h-[76px] flex flex-row items-center justify-between px-8 rounded-lg cursor-pointer">
              <div className="flex flex-row gap-4 items-center bg-gradient-to-br from-teal-500 to-teal-400 bg-clip-text text-transparent">
                <Image
                  src="/icons/trust.svg"
                  alt="metamask icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                Trustwallet
              </div>
              <Image
                src="/icons/right-arrow.svg"
                alt="right arrow"
                width={20}
                height={20}
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
