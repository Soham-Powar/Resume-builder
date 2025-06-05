

export default function FormInput({ name, isRequired, type, setInfo, info }) {

	function handleInputChange(e) {
		if (Array.isArray(info)) {
			console.log("hel");
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
		<div className="flex flex-col gap-1 mb-2">
			<label htmlFor={idfy}>{name}</label>
			<input
				type={type}
				id={idfy}
				name={idfy}
				required={isRequired}
				value={info[idfy] || ""}
				onChange={(e) =>
					handleInputChange(e)
				}
				className="rounded-full border px-2 py-1"
			/>
		</div>
	);
}