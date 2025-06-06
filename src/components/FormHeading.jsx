export default function FormHeading({ section }) {
	return (
		<h2 className="text-[24px] font-bold p-3 flex">
			{section.charAt(0).toUpperCase() + section.slice(1)}
			<button onClick={() => {
				const el = document.querySelector(`.js-${section}`);
				el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
			}} className="ml-[auto]">⌵</button>
		</h2>
	);
}