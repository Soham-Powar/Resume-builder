import Education from "./Education";

export default function EducationSection({ educations }) {
	return (
		<div className="p-2 px-14">
			<h2 className="text-center text-[19px] bg-[rgba(14,55,78,0.07)] font-bold p-1">Education</h2>
			<div className="eduations flex flex-col gap-1">
				{educations.map((education) => {
					return <Education key={education.index} education={education} />
				})}
			</div>

		</div>
	);
}