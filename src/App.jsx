import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Profile from "./components/Profile";
import ExperienceSection from "./components/ExperienceSection";

import PersonalInfoForm from "./components/PersonalInfoForm";


export default function App() {

	// STATES 
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "Soham Powar",
		email: "sohampowar13@gmail.com",
		phoneNumber: 8446841344,
		address: "Queens Road, London",
	});

	return (
		<div className="flex justify-between">
			<div className="flex-1/2 bg-pink-200 p-2 flex flex-col gap-1 min-h-screen">
				<PersonalInfoForm setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} />
			</div>


			<div className="flex-1/2 border-2 border-b-blue-950 min-h-screen bg-purple-600 p-2 flex flex-col gap-1">
				<PersonalInfo personalInfo={personalInfo} />
				<Profile />
				<ExperienceSection />
				{/* <Education />
				<Skills /> */}
			</div>
		</div>
	);
}