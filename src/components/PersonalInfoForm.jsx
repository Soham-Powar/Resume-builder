import FormInput from "./FormInput";
import FormHeading from "./FormHeading";

export default function PersonalInfoForm({ setPersonalInfo, personalInfo }) {
	return (
		<div className="bg-white rounded-xl">
			<FormHeading section="details" />
			<div className="js-details p-3">
				<FormInput name="Full name" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
				<FormInput name="Email" isRequired={true} type="email" setInfo={setPersonalInfo} info={personalInfo} />
				<FormInput name="Address" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
			</div>
		</div>
	);
}