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
import Upload from "./Upload";
import Image from "next/image";

export default function UploadModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [scrollBehavior, setScrollBehavior] = React.useState("inside");

	return (
		<>
			<Image
				onClick={onOpen}
				src="/icons/file-upload.svg"
				alt="upload icon"
				width={40}
				height={40}
				className="w-4 h-4 cursor-pointer"
			/>
			<Modal
				size="4xl"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				scrollBehavior="outside"
			>
				<ModalContent>
					<ModalHeader className="flex flex-col gap-1">
						Upload Dicom
					</ModalHeader>
					<ModalBody>
						<Upload />
					</ModalBody>
					{/* <ModalFooter>
						<Button color="primary">Analyse</Button>
					</ModalFooter> */}
				</ModalContent>
			</Modal>
		</>
	);
}
