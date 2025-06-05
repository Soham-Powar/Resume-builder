import FormInput from "./FormInput";

export default function ProfileForm({ setProfile, profile }) {
	return (
		<div className="bg-white rounded-xl p-3">
			<h2 className="text-[24px] font-semibold pb-2.5">Profile</h2>
			<FormInput name="About me" isRequired={true} type="text" setInfo={setProfile} info={profile} />
		</div>
	);
}