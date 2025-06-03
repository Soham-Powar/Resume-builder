import Experience from "./Experience";

export default function ExperienceSection() {
	return (
		<div className="bg-red-300 p-2">
			<h2 className="text-center">Professional Experience</h2>
			<div className="experiences flex flex-col gap-1">
				<Experience />
			</div>

		</div>
	);
}