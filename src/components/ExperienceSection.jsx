import Experience from "./Experience";

export default function ExperienceSection({ experiences }) {
	return (
		<div className="bg-red-300 p-2">
			<h2 className="text-center">Professional Experience</h2>
			<div className="experiences flex flex-col gap-1">
				{experiences.map((experience) => {
					return <Experience key={experience.index} experience={experience} />
				})}
			</div>

		</div>
	);
}