import Experience from "./Experience";

export default function ExperienceSection({ experiences }) {
	return (
		<div className="p-2 px-14">
			<h2 className="text-center text-[19px] bg-[rgba(14,55,78,0.07)] font-bold p-1">Professional Experience</h2>
			<div className="experiences flex flex-col gap-1">
				{experiences.map((experience) => {
					return <Experience key={experience.index} experience={experience} />
				})}
			</div>

		</div>
	);
}