import FormInput from "./FormInput";

export default function ProfileForm({ setProfile, profile }) {
	return (
		<div className="bg-blue-400 p-3">
			<h2>Profile: </h2>
			<FormInput name="About me" isRequired={true} type="text" setInfo={setProfile} info={profile} />
		</div>
	);
}