"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";

type FormField = {
	name: string;
	modality: string;
	bodyPart: string;
	studyDate: string;
	receivedDate: string;
};

const schema = yup.object().shape({
	name: yup.string().required("Patient name is required"),
	modality: yup.string().required("Modality is required"),
	bodyPart: yup.string().required("Body Part is required"),
	studyDate: yup.string().required("Study date is required"),
	receivedDate: yup.string().required("Received date is required"),
});

export default function AddPatientForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		handleSubmit,
		formState: { errors: error },
		control,
	} = useForm<FormField>({
		defaultValues: {
			name: "",
			modality: "",
			bodyPart: "",
			studyDate: "",
			receivedDate: "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<FormField> = async (data: {
		modality: string;
		bodyPart: string;
	}) => {
		setIsLoading(true);

		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-10"
		>
            <div className="flex lg:grid grid-cols-2 grid-flow-row flex-col gap-10">
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col gap-2">
						<Input
							label="Patient Name"
							placeholder="john doe"
							type="text"
							labelPlacement="outside"
							classNames={{
								inputWrapper: ["h-[50px]", "border-2 border-gray-300"],
							}}
							{...field}
						/>
						<div className="text-[#FF4B5A]">
							{error && <span>{error.name?.message}</span>}
						</div>
					</div>
				)}
			/>
			<Controller
				name="modality"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col gap-2">
						<Input
							label="Modality :"
							placeholder="Modality"
							type="text"
							labelPlacement="outside"
							classNames={{
								inputWrapper: ["h-[50px]", "border-2 border-gray-300"],
							}}
							{...field}
						/>
						<div className="text-[#FF4B5A]">
							{error && <span>{error.modality?.message}</span>}
						</div>
					</div>
				)}
			/>

			<Controller
				name="bodyPart"
				control={control}
				render={({ field }) => (
					<div  className="flex flex-col gap-2">
						<Input
							label="Body Part"
							placeholder="Body Part"
							type="bodyPart"
							labelPlacement="outside"
							classNames={{
								inputWrapper: ["h-[50px]", "border-2 border-gray-300"],
							}}
							{...field}
						/>
						<div className="text-[#FF4B5A]">
							{error && <span>{error.bodyPart?.message}</span>}
						</div>
					</div>
				)}
			/>
			<Controller
				name="studyDate"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col gap-2">
						<Input
							label="Study Date"
							placeholder="Body Part"
							type="date"
							labelPlacement="outside"
							classNames={{
								inputWrapper: ["h-[50px]", "border-2 border-gray-300"],
							}}
							{...field}
						/>
						<div className="text-[#FF4B5A]">
							{error && <span>{error.studyDate?.message}</span>}
						</div>
					</div>
				)}
			/>
			<Controller
				name="receivedDate"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col gap-2">
						<Input
							label="Received Date"
							placeholder="Received Date"
							type="date"
							labelPlacement="outside"
							classNames={{
								inputWrapper: ["h-[50px]", "border-2 border-gray-300"],
							}}
							{...field}
						/>
						<div className="text-[#FF4B5A]">
							{error && <span>{error.receivedDate?.message}</span>}
						</div>
					</div>
				)}
			/>
            </div>

			<Button
				type="submit"
				isLoading={isLoading}
				color="primary"
				spinnerPlacement="end"
				className="col-span-3 w-fit self-end"
			>
				{isLoading ? "Wait a minute" : "Create a new patient"}
			</Button>
		</form>
	);
}
