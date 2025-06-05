import { useState } from "react";
import ExperienceForm from "./ExperienceForm"

export default function ExperiencePanel({ setExperiences, experiences }) {

	const [formShown, setFormShown] = useState(-1);

	return (
		<div className="bg-blue-200 mx-40 p-2.5">
			<h2>Experiences: </h2>

			{formShown >= 0 ? (
				<ExperienceForm experiences={experiences} setExperiences={setExperiences} expID={formShown} />
			) : (
				<ul className=" flex flex-col gap-1.5">
					{experiences.map(experience => {
						return (
							<div key={experience.companyName} className="bg-amber-400 flex justify-between p-1.5">
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