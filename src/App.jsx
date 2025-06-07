import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Profile from "./components/Profile";
import ExperienceSection from "./components/ExperienceSection";

import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileForm from "./components/ProfileForm";
import ExperiencePanel from "./components/ExperiencePanel";

import generatePDF from "./components/generatePDF"


export default function App() {

	// STATES 
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "Soham Powar",
		email: "thisissohamsmail@gmail.com",
		phoneNumber: 8446841369,
		address: "Queens Road, Mumbai",
	});

	const [profile, setProfile] = useState({
		aboutMe: "I am a motivated and detail-oriented professional with a strong passion for learning and problem-solving. With a proven ability to adapt quickly, collaborate effectively, and deliver high-quality work, I thrive in fast-paced environments that challenge me to grow.",
	});

	const [experiences, setExperiences] = useState(
		[
			{
				index: 0,
				companyName: "Talonflame Ltd.",
				position: "Web Developer",
				startDate: "08/2020",
				endDate: "12/2022",
				location: "New Jersey, Bihar",
				description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes."
			},
			{
				index: 1,
				companyName: "NebulaSoft Solutions",
				position: "Frontend Developer",
				startDate: "01/2019",
				endDate: "07/2020",
				location: "Pune, Maharashtra",
				description: "Developed responsive web interfaces using React and Tailwind CSS. Collaborated with UX designers to implement pixel-perfect UI components."
			},
			{
				index: 2,
				companyName: "PixelCrate Technologies",
				position: "UI/UX Designer & Developer",
				startDate: "03/2017",
				endDate: "12/2018",
				location: "Bangalore, Karnataka",
				description: "Designed intuitive user interfaces for client-facing web applications. Converted Figma mockups into functional HTML/CSS components."
			}
		]
	)

	return (
		<div className="flex flex-col sm:flex-row justify-center bg-[#F3F4F6] p-5 gap-10">

			<div className="grow-1 p-2 flex flex-col gap-4 max-w-[450px]">
				<PersonalInfoForm setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} />
				<ProfileForm setProfile={setProfile} profile={profile} />
				<ExperiencePanel setExperiences={setExperiences} experiences={experiences} />
				<button
					onClick={generatePDF}
					className="bg-[#F87171] hover:bg-[#ef4444] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
				>
					Download PDF
				</button>

			</div>


			<div className="pdf-content h-[29.7cm] w-[21cm] flex flex-col gap-1 [box-shadow:0_13px_27px_-5px_rgba(50,50,93,0.1),0_8px_16px_-8px_rgba(0,0,0,0.25)]">
				<PersonalInfo personalInfo={personalInfo} />
				<Profile profile={profile} />
				<ExperienceSection experiences={experiences} />
				{/* <Education /> */}
			</div>


		</div>


	);
}