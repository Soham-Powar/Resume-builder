import FormInput from "./FormInput";

export default function ExperienceForm({ setProfile, profile }) {
	return (
		<div className="bg-blue-200 mx-40 p-2.5">
			<h2>Profile: </h2>
			<FormInput name="About me" isRequired={true} type="text" setInfo={setProfile} info={profile} />
		</div>
	);
}