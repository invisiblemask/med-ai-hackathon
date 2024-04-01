"use client";

import * as yup from "yup";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { toast } from "sonner";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required").min(8)
});

export default function LoginComponent() {
    const router = useRouter();
    const {login, isLoading} = useAuth();

    const { handleSubmit, formState: { errors: error }, control } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: { email: string, password: string }) => {

        const { message, status } = await login(data)
        
        if(status === 201){
            router.push("/dashboard")
            toast.success(message)
        }else{
            toast.error(message)
        }
    }

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
                    onClick={() => router.back()}>
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
                            Welcome to MedAi. <span>Sign in to get started.</span>
                        </h1>
                        <p className="text-sm text-[#8181A5]">
                            Enter your details to proceed further
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 lg:w-[414px]">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex flex-col gap-2">
                                        <Input
                                            label="Email :"
                                            placeholder="johndoe@example.com"
                                            type="text"
                                            labelPlacement="outside"
                                            classNames={{
                                                inputWrapper: "h-[50px]",
                                                label: "text-base"
                                            }}
                                            {...field}
                                        />
                                        <div className="text-[#FF4B5A]">
                                            {error && <span>{error.email?.message}</span>}
                                        </div>
                                    </div>
                                )}
                            />

                            <div className="flex flex-col gap-2">
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <>
                                            <Input
                                                label="Password :"
                                                placeholder="********"
                                                type="password"
                                                labelPlacement="outside"
                                                classNames={{ inputWrapper: "h-[50px]" }}
                                                {...field}
                                            />
                                            <div className="text-[#FF4B5A]">{error && <span>{error.password?.message}</span>}</div>
                                        </>

                                    )}
                                />
                                <Link
                                    href="/forgot-password"
                                    className="bg-gradient-to-br from-teal-500 to-teal-400 bg-clip-text text-transparent w-fit">
                                    Forgot Password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                isLoading={isLoading}
                                color="primary"
                                spinnerPlacement="end">
                                {isLoading ? "Wait a minute" : "Sign in"}
                            </Button>
                        </form>
                        <div className="flex flex-row items-center justify-center gap-2 text-gray-500">
                            Want to register you business? <Link href="/register" className="text-[#131313]">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
