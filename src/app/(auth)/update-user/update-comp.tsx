"use client"

import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "sonner";


const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
});


export const UpdateComp = () => {
    const {isLoading, updateName} = useAuth()
    const router = useRouter();
    
    const { handleSubmit, formState: { errors: error }, control } = useForm({
        defaultValues: {
            name: "",
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: { name: string,}) => {

        const { message, status } = await updateName(data)
        
        if(status === 201){
            router.push("/dashboard")
            toast.success(message)
        }else{
            toast.error(message)
        }
    }

  return (
    <div className="flex flex-col items-center gap-10 mt-20 mb-10 w-full">
    <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-normal flex flex-col gap-1">
            Welcome to MedAi. <span>Update User Info to continue.</span>
        </h1>
        <p className="text-sm text-[#8181A5]">
            Enter your name to proceed further
        </p>
    </div>

    <div className="flex flex-col gap-4 lg:w-[414px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <div className="flex flex-col gap-2">
                        <Input
                            label="Name :"
                            placeholder="John Doe"
                            type="text"
                            labelPlacement="outside"
                            classNames={{
                                inputWrapper: "h-[50px]",
                                label: "text-base"
                            }}
                            {...field}
                        />
                        <div className="text-[#FF4B5A]">
                            {error && <span>{error.name?.message}</span>}
                        </div>
                    </div>
                )}
            />

            <Button
                type="submit"
                isLoading={isLoading}
                color="primary"
                spinnerPlacement="end">
                {isLoading ? "Wait a minute" : "Sign in"}
            </Button>
        </form>
    </div>
</div>
  )
}
