import {createContext, useEffect, useState} from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
    const [refetchUser, setRefetchUser] = useState(false)
    const [user, setUser] = useState(null)
    console.log(user);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => console.log(result.user))
    }

    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const UpdateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }
    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
        return() => unsubscribe();
    }, [refetchUser])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        logout,
        user,
        githubLogin,
        UpdateUserProfile,
        refetchUser,
        setRefetchUser
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;