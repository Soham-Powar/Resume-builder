export default function FormInput({ name, isRequired, type, setInfo, info }) {

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
					setInfo({
						...info,
						[idfy]: e.target.value,
					})
				}
				className="rounded-full border px-2 py-1"
			/>
		</div>
	);
}