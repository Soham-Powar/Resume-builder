import FormInput from "./FormInput";

export default function PersonalInfoForm({ setPersonalInfo, personalInfo }) {
	return (
		<div className="bg-white rounded-xl p-3">
			<h2 className="text-[24px] font-bold pb-2.5">Personal Info</h2>
			<FormInput name="Full name" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
			<FormInput name="Email" isRequired={true} type="email" setInfo={setPersonalInfo} info={personalInfo} />
			<FormInput name="Address" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
		</div>
	);
}