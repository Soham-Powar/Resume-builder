import FormInput from "./FormInput";

export default function ExperienceForm({ setExperiences, experiences, expID }) {
	return (
		<div className="bg-blue-200 mx-40 p-2.5">
			<FormInput name="Company Name" isRequired={true} type="text" setInfo={setExperiences} info={experiences} expID={expID} />
		</div>
	);
}