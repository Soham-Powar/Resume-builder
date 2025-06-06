import FormInput from "./FormInput";

export default function PersonalInfoForm({ setPersonalInfo, personalInfo }) {
	return (
		<div className="bg-white rounded-xl p-3">
			<h2 className="text-[24px] font-bold pb-2.5 flex">
				Personal Info
				<button onClick={() => {
					const el = document.querySelector('.js-personal-info');
					el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
				}} className="ml-[auto]">👀</button>
			</h2>
			<div className="js-personal-info">
				<FormInput name="Full name" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
				<FormInput name="Email" isRequired={true} type="email" setInfo={setPersonalInfo} info={personalInfo} />
				<FormInput name="Address" isRequired={true} type="text" setInfo={setPersonalInfo} info={personalInfo} />
			</div>
		</div>
	);
}