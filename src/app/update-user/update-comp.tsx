"use client"

import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import React from "react";
import * as yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";


const schema = yup.object().shape({
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required").min(8)
});


export const UpdateComp = () => {
    const { onOpen, onOpenChange } = useDisclosure();
    const {isLoading} = useAuth()
    const router = useRouter();
    
    const { handleSubmit, formState: { errors: error }, control } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: { email: string, password: string }) => {


        router.push("/dashboard")
        console.log(data)
    }

  return (
    <>hello</>
    // <Modal isOpen={true} onOpenChange={onOpenChange} size="3xl">
    //         <ModalContent className="p-2">
    //             {(onClose) => (
    //                 <>
    //                     <ModalHeader className="flex flex-col gap-1">
    //                         Update Info
    //                     </ModalHeader>
    //                     <ModalBody className="flex flex-col gap-4">
                            
    //                     <div className="flex flex-col gap-10 mt-28">
    //                 <div className="flex flex-col gap-2">
    //                     <h1 className="text-3xl font-normal flex flex-col gap-1">
    //                         Welcome to MedAi. <span>Sign in to get started.</span>
    //                     </h1>
    //                     <p className="text-sm text-[#8181A5]">
    //                         Enter your details to proceed further
    //                     </p>
    //                 </div>

    //                 <div className="flex flex-col gap-4 lg:w-[414px]">
    //                     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
    //                         <Controller
    //                             name="email"
    //                             control={control}
    //                             render={({ field }) => (
    //                                 <div className="flex flex-col gap-2">
    //                                     <Input
    //                                         label="Email :"
    //                                         placeholder="johndoe@example.com"
    //                                         type="text"
    //                                         labelPlacement="outside"
    //                                         classNames={{
    //                                             inputWrapper: "h-[50px]",
    //                                             label: "text-base"
    //                                         }}
    //                                         {...field}
    //                                     />
    //                                     <div className="text-[#FF4B5A]">
    //                                         {error && <span>{error.email?.message}</span>}
    //                                     </div>
    //                                 </div>
    //                             )}
    //                         />

    //                         <div className="flex flex-col gap-2">
    //                             <Controller
    //                                 name="password"
    //                                 control={control}
    //                                 render={({ field }) => (
    //                                     <>
    //                                         <Input
    //                                             label="Password :"
    //                                             placeholder="********"
    //                                             type="password"
    //                                             labelPlacement="outside"
    //                                             classNames={{ inputWrapper: "h-[50px]" }}
    //                                             {...field}
    //                                         />
    //                                         <div className="text-[#FF4B5A]">{error && <span>{error.password?.message}</span>}</div>
    //                                     </>

    //                                 )}
    //                             />
    //                             <Link
    //                                 href="/forgot-password"
    //                                 className="bg-gradient-to-br from-teal-500 to-teal-400 bg-clip-text text-transparent w-fit">
    //                                 Forgot Password?
    //                             </Link>
    //                         </div>

    //                         <Button
    //                             type="submit"
    //                             isLoading={isLoading}
    //                             color="primary"
    //                             spinnerPlacement="end">
    //                             {isLoading ? "Wait a minute" : "Sign in"}
    //                         </Button>
    //                     </form>
    //                     <div className="flex flex-row items-center justify-center gap-2 text-gray-500">
    //                         Want to register you business? <Link href="/register" className="text-[#131313]">Get started</Link>
    //                     </div>
    //                 </div>
    //             </div>
    //                     </ModalBody>
    //                 </>
    //             )}
    //         </ModalContent>
    //     </Modal>
  )
}
