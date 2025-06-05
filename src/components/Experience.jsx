export default function Experience({ experience }) {
	return (
		<div className="bg-yellow-300 flex gap-1.5 p-2">
			<div className="flex-2/9 bg-amber-500 p-3">
				<p>{experience.startDate} - {experience.endDate}</p>
				<p>{experience.location}</p>
			</div>
			<div className="flex-7/9 bg-amber-50 p-3">
				<p className="font-semibold text-lg">{experience.companyName}</p>
				<p>{experience.position}</p>
				<p>{experience.description}</p>
			</div>
		</div>
	);
}