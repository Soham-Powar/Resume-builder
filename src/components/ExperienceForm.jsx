import FormInput from "./FormInput";

export default function ExperienceForm({ setExperiences, experiences, expID }) {
	return (
		<div className="bg-white p-2">
			<FormInput name="Company Name" isRequired={true} type="text" setInfo={setExperiences} info={experiences} expID={expID} />
			<FormInput name="Position" isRequired={true} type="text" setInfo={setExperiences} info={experiences} expID={expID} />
			<div className="flex gap-1">
				<FormInput name="Start Date" isRequired={true} type="text" setInfo={setExperiences} info={experiences} expID={expID} />
				<FormInput name="End Date" isRequired={true} type="text" setInfo={setExperiences} info={experiences} expID={expID} />
			</div>
			<FormInput name="Location" isRequired={false} type="text" setInfo={setExperiences} info={experiences} expID={expID} />
			<FormInput name="Description" isRequired={false} type="text" setInfo={setExperiences} info={experiences} expID={expID} />
		</div>
	);
}