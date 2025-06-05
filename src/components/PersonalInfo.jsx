export default function PersonalInfo({ personalInfo }) {
	return (
		<div className="bg-[#0E374E] text-white p-2 h-[150px]">
			<p className="text-2xl text-center">{personalInfo.fullName}</p>
			<div>
				<p>{personalInfo.email}</p>
				<p>{personalInfo.phoneNumber}</p>
				<p>{personalInfo.address}</p>
			</div>
		</div>
	);
}