import PersonalInfo from "./components/PersonalInfo";
import Profile from "./components/Profile";
import ExperienceSection from "./components/ExperienceSection";

export default function App() {
	return (
		<div className="flex justify-between">
			<div className="flex-1/2 bg-pink-200">Edit side</div>


			<div className="flex-1/2 border-2 border-b-blue-950 min-h-screen bg-purple-600 p-2 flex flex-col gap-1">
				<PersonalInfo />
				<Profile />
				<ExperienceSection />
				{/* <Education />
				<Skills /> */}
			</div>
		</div>
	);
}