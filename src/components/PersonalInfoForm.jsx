import FormInput from "./FormInput";

export default function PersonalInfoForm({ setPersonalInfo, personalInfo }) {
	return (
		<div className="bg-blue-400 mx-40 p-2.5">
			<h2>Personal Info: </h2>
			<FormInput name="Full name" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
			<FormInput name="Email" isRequired={true} type="email" setInfo={setPersonalInfo} info={personalInfo} />
			<FormInput name="Address" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
		</div>
	);
}