import { UserContext } from "../App";
import { useContext } from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
    const { userMethod } = useContext(UserContext);
	return (
		<div>
			<Navbar />
			{ userMethod.user.username } <br />
			{ userMethod.user.email } <br />
			{ userMethod.user.firstname } <br />
			{ userMethod.user.lastname } <br />
			{ userMethod.user.description } <br />
			{ userMethod.user.createdAt }
		</div>
	)
}

export default Profile