export default function FormInput({ name, isRequired, type }) {
	let idfy = name.toLowerCase().replace(/\s/g, '');
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={idfy}>{name}</label>
			<input type={type} id={idfy} name={idfy} required={isRequired} />
		</div>
	);
}