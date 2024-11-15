import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(user);

    const createNewUser = (email,password)=> {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const createLogIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (updatedUser)=> {
        return updateProfile(auth.currentUser, updatedUser)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser)
            setLoading(false)
        })
        return () =>unSubscribe()
       
    } ,[])

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        logOut,
        createLogIn,
        updateUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;