import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //Google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    //LogOut User
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    //updateUserProfile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }




    //On Auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user:', currentUser);

            //get and set token
            if (currentUser) {
                axios.post('https://bistro-boss-server-khaki-nu.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;