export default function PersonalInfo({ personalInfo }) {
	return (
		<div className="bg-blue-400 p-2">
			<p className="text-2xl text-center">{personalInfo.fullName}</p>
			<div>
				<p>{personalInfo.email}</p>
				<p>{personalInfo.phoneNumber}</p>
				<p>{personalInfo.address}</p>
			</div>
		</div>
	);
}