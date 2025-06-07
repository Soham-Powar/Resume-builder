import { useState } from "react";
import ExperienceForm from "./ExperienceForm"
import FormHeading from "./FormHeading";

export default function ExperiencePanel({ setExperiences, experiences }) {

	const [formShown, setFormShown] = useState(-1);

	return (
		<div className="bg-white rounded-xl pb-2">
			<FormHeading section="experiences" />

			{formShown >= 0 ? (
				<>
					<ExperienceForm experiences={experiences} setExperiences={setExperiences} expID={formShown} />
					<button onClick={() => setFormShown(-1)} className="bg-[#187FF5] text-white font-bold py-1.5 px-2.5 rounded-lg ml-[40%] hover:bg-[#187ff5c4]">Save</button>
				</>

			) : (
				<ul className="flex flex-col gap-1.5 js-experiences">
					{experiences.map(experience => {
						return (
							<div key={experience.companyName} className="flex justify-between p-2 border-t-7 border-[#F3F4F6] items-center">
								<li>{experience.companyName}</li>
								<div className="flex gap-1.5">
									<button onClick={() => setFormShown(experience.index)}>Edit</button>
									<button>X</button>
								</div>
							</div>
						);
					})}
				</ul>
			)
			}
		</div >
	)
}