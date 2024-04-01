"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { authPost } from "../../../../backend_services/api_services";
import { toast } from "sonner";
import { useAuth } from "@/app/contexts/AuthContext";

const schema = yup.object().shape({
	name: yup.string().required("Patient name is required"),
	modality: yup.string().required("Modality is required"),
	bodyPart: yup.string().required("Body Part is required"),
	studyDate: yup.string().required("Study date is required"),
	recieveDate: yup.string().required("Received date is required"),
});

export default function AddPatientForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { token } = useAuth()
	const router = useRouter();

	console.log(token);

	const {
		handleSubmit,
		formState: { errors: error },
		control,
	} = useForm({
		defaultValues: {
			name: "",
			modality: "",
			bodyPart: "",
			studyDate: "",
			recieveDate: "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: object) => {
		setIsLoading(true);
		try {
		  const res: any = await authPost({
			url: `/patient`,
			req: data,
		  });
		  toast.success(res.data.message);
		  setIsLoading(false);
		  console.log(res.data);
		  router.refresh();
		} catch (error: any) {
		  setIsLoading(false);
		  toast.error(error.response?.data.message);
		  console.log(error);
		}
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
									inputWrapper: "h-[50px]",
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
									inputWrapper: "h-[50px]",
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
						<div className="flex flex-col gap-2">
							<Input
								label="Body Part"
								placeholder="Body Part"
								type="bodyPart"
								labelPlacement="outside"
								classNames={{
									inputWrapper: "h-[50px]",
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
									inputWrapper: "h-[50px]",
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
					name="recieveDate"
					control={control}
					render={({ field }) => (
						<div className="flex flex-col gap-2">
							<Input
								label="Received Date"
								placeholder="Received Date"
								type="date"
								labelPlacement="outside"
								classNames={{
									inputWrapper: "h-[50px]",
								}}
								{...field}
							/>
							<div className="text-[#FF4B5A]">
								{error && <span>{error.recieveDate?.message}</span>}
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
