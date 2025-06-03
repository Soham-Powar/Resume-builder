import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Profile from "./components/Profile";
import ExperienceSection from "./components/ExperienceSection";

import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileForm from "./components/ProfileForm";


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

	return (
		<div className="flex justify-between">
			<div className="flex-1/2 bg-pink-200 p-2 flex flex-col gap-1 min-h-screen">
				<PersonalInfoForm setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} />
				<ProfileForm setProfile={setProfile} profile={profile} />
			</div>


			<div className="flex-1/2 border-2 border-b-blue-950 min-h-screen bg-purple-600 p-2 flex flex-col gap-1">
				<PersonalInfo personalInfo={personalInfo} />
				<Profile profile={profile} />
				<ExperienceSection />
				{/* <Education />
				<Skills /> */}
			</div>
		</div>
	);
}