import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

export default function ExperienceForm({ setExperiences, experiences, expID }) {
	return (
		<div className="bg-white p-3 py-0">
			<FormInput name="Company Name" isRequired={true} type="text" setInfo={setExperiences} info={experiences} id={expID} />
			<FormInput name="Position" isRequired={true} type="text" setInfo={setExperiences} info={experiences} id={expID} />
			<div className="flex gap-1">
				<FormInput name="Start Date" isRequired={true} type="text" setInfo={setExperiences} info={experiences} id={expID} />
				<FormInput name="End Date" isRequired={true} type="text" setInfo={setExperiences} info={experiences} id={expID} />
			</div>
			<FormInput name="Location" isRequired={false} type="text" setInfo={setExperiences} info={experiences} id={expID} />
			<FormTextArea name="Description" isRequired={false} setInfo={setExperiences} info={experiences} id={expID} />
		</div>
	);
}