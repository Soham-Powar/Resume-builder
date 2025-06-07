import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

export default function EducationForm({ setEducations, educations, eduID }) {
	return (
		<div className="bg-white p-3 py-0">
			<FormInput name="Company Name" isRequired={true} type="text" setInfo={setEducations} info={educations} eduID={eduID} />
			<FormInput name="Position" isRequired={true} type="text" setInfo={setEducations} info={educations} eduID={eduID} />
			<div className="flex gap-1">
				<FormInput name="Start Date" isRequired={true} type="text" setInfo={setEducations} info={educations} eduID={eduID} />
				<FormInput name="End Date" isRequired={true} type="text" setInfo={setEducations} info={educations} eduID={eduID} />
			</div>
			<FormInput name="Location" isRequired={false} type="text" setInfo={setEducations} info={educations} eduID={eduID} />
			<FormTextArea name="Description" isRequired={false} setInfo={setEducations} info={educations} eduID={eduID} />
		</div>
	);
}