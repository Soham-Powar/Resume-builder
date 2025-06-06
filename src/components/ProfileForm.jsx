import FormTextArea from "./FormTextArea";

export default function ProfileForm({ setProfile, profile }) {
	return (
		<div className="bg-white rounded-xl p-3">
			<h2 className="text-[24px] font-bold pb-2.5 flex">
				Profile
				<button onClick={() => {
					const el = document.querySelector('.js-profile');
					el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
				}} className="ml-[auto]">👀</button>
			</h2>
			<FormTextArea name="About me" isRequired={true} setInfo={setProfile} info={profile} className="js-profile" />
		</div>
	);
}