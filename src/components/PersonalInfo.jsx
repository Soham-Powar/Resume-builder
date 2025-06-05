export default function PersonalInfo({ personalInfo }) {
	return (
		<div className="bg-[#0E374E] text-white p-5 h-[150px]">
			<p className="text-center text-3xl font-bold pt-2">{personalInfo.fullName}</p>
			<div className="flex gap-10 flex-wrap justify-center pt-5">
				<p className="flex items-center">
					{personalInfo.email}
				</p>
				<p>
					{personalInfo.phoneNumber}
				</p>
				<p>
					{personalInfo.address}
				</p>
			</div>
		</div>
	);
}