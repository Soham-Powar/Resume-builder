export default function Education({ education }) {
	return (
		<div className="flex gap-1.5">
			<div className="flex-2/9 p-2">
				<p>{education.startDate} - {education.endDate}</p>
				<p>{education.location}</p>
			</div>
			<div className="flex-7/9 pt-2">
				<p className="font-semibold text-lg">{education.companyName}</p>
				<p>{education.position}</p>
				<p>{education.description}</p>
			</div>
		</div>
	);
}