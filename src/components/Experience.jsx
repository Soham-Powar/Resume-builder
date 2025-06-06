export default function Experience({ experience }) {
	return (
		<div className="flex gap-1.5">
			<div className="flex-2/9 p-2">
				<p>{experience.startDate} - {experience.endDate}</p>
				<p>{experience.location}</p>
			</div>
			<div className="flex-7/9 pt-2">
				<p className="font-semibold text-lg">{experience.companyName}</p>
				<p>{experience.position}</p>
				<p>{experience.description}</p>
			</div>
		</div>
	);
}