

export default function FormTextArea({ name, isRequired, setInfo, info, id, className }) {

	function handleInputChange(e) {
		if (Array.isArray(info)) {

			const copyExperience = {
				...info[id],
				[idfy]: e.target.value,
			};

			const shallowCopy = info.slice();
			shallowCopy[id] = copyExperience;
			setInfo(shallowCopy);

		} else {
			setInfo({
				...info,
				[idfy]: e.target.value,
			})
		}
	}

	// MAKE IT INTO CAMELCASE
	let idfy = name
		.toLowerCase()
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
			index === 0 ? word.toLowerCase() : word.toUpperCase()
		)
		.replace(/\s+/g, '');


	return (
		<div className={`flex flex-col gap-1 mb-2 ${className}`} >
			<label htmlFor={idfy} className="font-semibold">{name}</label>
			<textarea
				id={idfy}
				name={idfy}
				required={isRequired}
				value={
					Array.isArray(info)
						? info[id]?.[idfy] || ""
						: info[idfy] || ""
				}
				onChange={(e) =>
					handleInputChange(e)
				}
				className="rounded-2xl rows-4 border px-2 py-1">

			</textarea>
		</div >
	);
}