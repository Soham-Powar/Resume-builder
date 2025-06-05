import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Profile from "./components/Profile";
import ExperienceSection from "./components/ExperienceSection";

import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileForm from "./components/ProfileForm";
import ExperiencePanel from "./components/ExperiencePanel";


export default function App() {

	// STATES 
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "Soham Powar",
		email: "sohampowar13@gmail.com",
		phoneNumber: 8446841344,
		address: "Queens Road, London",
	});

	const [profile, setProfile] = useState({
		aboutMe: "I am a motivated and detail-oriented professional with a strong passion for learning and problem-solving. With a proven ability to adapt quickly, collaborate effectively, and deliver high-quality work, I thrive in fast-paced environments that challenge me to grow. I’m driven by curiosity and a desire to make meaningful contributions, whether working independently or as part of a team.",
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
				description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
			},
			{
				index: 1,
				companyName: "NebulaSoft Solutions",
				position: "Frontend Developer",
				startDate: "01/2019",
				endDate: "07/2020",
				location: "Pune, Maharashtra",
				description: "Developed responsive web interfaces using React and Tailwind CSS. Collaborated with UX designers to implement pixel-perfect UI components. Optimized page performance and accessibility across major browsers."
			},
			{
				index: 2,
				companyName: "PixelCrate Technologies",
				position: "UI/UX Designer & Developer",
				startDate: "03/2017",
				endDate: "12/2018",
				location: "Bangalore, Karnataka",
				description: "Designed intuitive user interfaces for client-facing web applications. Converted Figma mockups into functional HTML/CSS components. Worked closely with backend teams to ensure seamless integration."
			}
		]
	)

	return (
		<div className="flex justify-center bg-[#F3F4F6] p-5 gap-10">

			<div className="grow-1 p-2 flex flex-col gap-1 bg-amber-200 max-w-[450px]">
				<PersonalInfoForm setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} />
				<ProfileForm setProfile={setProfile} profile={profile} />
				<ExperiencePanel setExperiences={setExperiences} experiences={experiences} />
			</div>


			<div className="h-[29.7cm] w-[21cm] flex flex-col gap-1 [box-shadow:0_13px_27px_-5px_rgba(50,50,93,0.1),0_8px_16px_-8px_rgba(0,0,0,0.25)]">
				<PersonalInfo personalInfo={personalInfo} />
				<Profile profile={profile} />
				<ExperienceSection experiences={experiences} />
				{/* <Education />
				<Skills /> */}
			</div>


		</div>


	);
}