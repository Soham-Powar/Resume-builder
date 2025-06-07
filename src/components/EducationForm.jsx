import FormInput from "./FormInput";

export default function EducationForm({ setEducations, educations, eduID }) {
	return (
		<div className="bg-white p-3 py-0">
			<FormInput name="School" isRequired={true} type="text" setInfo={setEducations} info={educations} id={eduID} />
			<FormInput name="Degree" isRequired={true} type="text" setInfo={setEducations} info={educations} id={eduID} />
			<div className="flex gap-1">
				<FormInput name="Start Date" isRequired={true} type="text" setInfo={setEducations} info={educations} id={eduID} />
				<FormInput name="End Date" isRequired={true} type="text" setInfo={setEducations} info={educations} id={eduID} />
			</div>
			<FormInput name="Location" isRequired={false} type="text" setInfo={setEducations} info={educations} id={eduID} />
		</div>
	);
}