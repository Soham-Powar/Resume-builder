import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

export default function ProfileForm({ setProfile, profile }) {
	return (
		<div className="bg-white rounded-xl p-3">
			<h2 className="text-[24px] font-bold pb-2.5">Profile</h2>
			<FormTextArea name="About me" isRequired={true} setInfo={setProfile} info={profile} />
		</div>
	);
}