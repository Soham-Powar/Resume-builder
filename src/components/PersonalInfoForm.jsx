import FormInput from "./FormInput";

export default function PersonalInfoForm() {
	return (
		<div className="bg-blue-400 mx-40 p-2.5">
			<h2>Personal Info: </h2>
			<FormInput name="Full name" isRequired={true} type="text" />
			<FormInput name="Email" isRequired={true} type="email" />
		</div>
	);
}