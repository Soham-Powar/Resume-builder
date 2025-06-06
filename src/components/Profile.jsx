export default function Profile({ profile }) {
	return (
		<div className="px-14">
			<h2 className="text-center text-[19px] bg-[rgba(14,55,78,0.07)] font-bold mt-8 p-1">
				Profile

			</h2>
			<p className="text-[16px] p-1">{profile.aboutMe}</p>
		</div>
	);
}