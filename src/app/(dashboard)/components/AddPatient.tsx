import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import { PlusIcon } from "@/icons/PlusIcon";
import  Upload from "./Upload";
import AddPatientForm from "./AddPatientForm";

export default function AddPatient() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");

	return (
		<>
			<Button onPress={onOpen} color="primary" endContent={<PlusIcon />}>
				Add New Patient
			</Button>
			<Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}  scrollBehavior="outside">
				<ModalContent>
					
							<ModalHeader className="flex flex-col gap-1">
								Add Patient
							</ModalHeader>
							<ModalBody>
								<AddPatientForm />
							</ModalBody>
							<ModalFooter>
								
							</ModalFooter>
						
				</ModalContent>
			</Modal>
		</>
	);
}
