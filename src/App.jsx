import PersonalInfo from "./components/PersonalInfo";

export default function App() {
	return (
		<div className="flex justify-between">
			<div className="flex-1/2 bg-pink-200">Edit side</div>
			<div className="flex-1/2 border-2 border-b-blue-950 h-screen bg-purple-600">
				<PersonalInfo />
				{/* <Profile />
				<Experience />
				<Education />
				<Skills /> */}
			</div>
		</div>
	);
}