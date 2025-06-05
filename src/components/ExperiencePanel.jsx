import { useState } from "react";
import ExperienceForm from "./ExperienceForm"

export default function ExperiencePanel({ setExperiences, experiences }) {

	const [formShown, setFormShown] = useState(-1);

	return (
		<div className="bg-white rounded-xl pb-2">
			<h2 className="text-[24px] font-bold p-3">Experiences</h2>

			{formShown >= 0 ? (
				<ExperienceForm experiences={experiences} setExperiences={setExperiences} expID={formShown} />
			) : (
				<ul className=" flex flex-col gap-1.5">
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