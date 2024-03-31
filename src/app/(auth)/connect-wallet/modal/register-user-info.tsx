"use client"

import { useAuth } from "@/app/contexts/AuthContext";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";

interface ModalProps {
    isOpen: boolean;
    account: any;
}

export default function RegisterUserInfo({isOpen, account}: ModalProps) {
    const { onOpen, onOpenChange } = useDisclosure();
    const {isLoading} = useAuth()

    async function handleSubmit() {
        
    }

    return <>
        <Button variant="solid" color="primary" onPress={onOpen} className="mt-3">
            Update Info
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
            <ModalContent className="p-2">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Update Info
                        </ModalHeader>
                        <ModalBody className="flex flex-col gap-4">

                            <Button
                                onPress={handleSubmit}
                                className="self-end"
                                color="primary"
                                isLoading={isLoading}
                                type="submit"
                                spinnerPlacement="end"
                            >
                                {isLoading ? "Submitting" : "Submit"}
                            </Button>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>
}