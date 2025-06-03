export default function Profile({ profile }) {
	return (
		<div className="bg-green-300 p-2">
			<h2 className="text-center">Profile</h2>
			<p>{profile.aboutMe}</p>
		</div>
	);
}