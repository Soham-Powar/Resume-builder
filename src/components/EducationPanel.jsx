import { useState } from "react";
import EducationForm from "./EducationForm"
import FormHeading from "./FormHeading";

let eduIndex = 2;

export default function EducationPanel({ setEducations, educations }) {

	function addNewEducation() {
		const newExp = {
			index: eduIndex,
			school: "",
			degree: "",
			startDate: "",
			endDate: "",
			location: "",
		}
		setEducations([
			...educations,
			newExp
		]);
		setFormShown(eduIndex);
		eduIndex++;
	}

	const [formShown, setFormShown] = useState(-1);

	return (
		<div className="bg-white rounded-xl pb-2">
			<FormHeading section="education" />

			{formShown >= 0 ? (
				<>
					<EducationForm educations={educations} setEducations={setEducations} eduID={formShown} />
					<button onClick={() => setFormShown(-1)} className="bg-[#187FF5] text-white font-bold py-1.5 px-2.5 rounded-lg ml-[40%] hover:bg-[#187ff5c4]">Save</button>
				</>

			) : (
				<>
					<ul className="flex flex-col gap-1.5 js-educations">
						{educations.map(education => {
							return (
								<div key={education.index} className="flex justify-between p-2 border-t-7 border-[#F3F4F6] items-center">
									<li>{education.school}</li>
									<div className="flex gap-1.5">
										<button onClick={() => setFormShown(education.index)}>Edit</button>
										<button>X</button>
									</div>
								</div>
							);
						})}
					</ul>
					<div className="flex">
						<button onClick={addNewEducation} className="border-[#F3F4F6] border-4 text-[14px] px-2 py-1 m-auto font-medium rounded-xl">+ Education</button>
					</div>
				</>
			)
			}
		</div >
	)
}