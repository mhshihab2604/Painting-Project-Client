import {LuPencil} from "react-icons/lu";
import useAuth from "../UseAuth/useAuth";
import "./userProfile.css"
import {Helmet} from 'react-helmet';
const UserProfile = () => {
    const {user} = useAuth()
    return (
        <div>
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div className="profile_container">
                <div className="bg_graphic">

                    <div className="profile_card">

                        <label className="user_profile_img">
                            <img src={user
                                    ?.photoURL} alt=""/>
                            <button className="profile_update_btn"></button>
                        </label>

                        <div className="userDetails">
                            <h2 className="userName">Name: {
                                    user
                                        ?.displayName || "unknown"
                                }
                                <LuPencil/>
                            </h2>
                            <h2 className="UserEmail">Email: {
                                    user
                                        ?.email || "unknown"
                                }
                                <LuPencil/>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;