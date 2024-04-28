import useAuth from "../UseAuth/useAuth";
import {getAuth, updateProfile} from "firebase/auth";
import {Helmet} from 'react-helmet';
import {toast} from "sonner";

// export default UpdateProfile;

const UpdateProfile = () => {
    const {user, setUser} = useAuth()

    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const userName = form.name.value
        const image = form.image.value

        const toastId = toast.loading("Please wait")
        try {
            const auth = getAuth()
            await updateProfile(auth.currentUser, {
                photoURL: image,
                displayName: userName
            })
            // to show the updated profile img
            let userReplica = {
                ...user
            }
            userReplica.displayName = userName
            userReplica.photoURL = image
            setUser(userReplica)

            toast.dismiss(toastId)
            toast.success("Name and Image updated")
        } catch  {
            toast.dismiss(toastId)
            toast.error(
                "Something went wrong",
                {description: "Please refresh this page and try again"}
            )
        }
    }

    return (
        <> < div > <Helmet>
            <title>Update Profile</title>
        </Helmet>
        <div
            className="flex flex-col mx-auto max-w-md p-6 bg-gradient-to-r from-[#03cdb5] to-[rgb(12,191,221)] dark:text-black shadow-2xl rounded-md sm:p-10 mt-10">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Update Profile</h1>
                <p className="text-sm dark:text-gray-600">Update Your Profile</p>
            </div>
            <form onSubmit={handleUpdate} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input
                            defaultValue={user
                                ?.displayName}
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Update your name"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input
                            defaultValue={user
                                ?.email}
                            readOnly="readOnly"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="leroy@jenkins.com"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-300 dark:text-gray-800"/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="image" className="block dark:text-gray-600">Image</label>
                        <input
                            defaultValue={user
                                ?.photoURL}
                            type="text"
                            name="image"
                            id="image"
                            placeholder="Image URL"
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"/>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 rounded-md bg-gradient-to-r from-[#ff453e] to-[#43b3d2] font-semibold border-2 dark:text-gray-50">Update Profile</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</>
    );
};

export default UpdateProfile;
