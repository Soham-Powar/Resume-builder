import FormTextArea from "./FormTextArea";
import FormHeading from "./FormHeading";

export default function ProfileForm({ setProfile, profile }) {
	return (
		<div className="bg-white rounded-xl">
			<FormHeading section="profile" />
			<FormTextArea name="About me" isRequired={true} setInfo={setProfile} info={profile} className="js-profile" />
		</div>
	);
}