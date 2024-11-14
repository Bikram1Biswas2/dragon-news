import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    console.log(user);

    const createNewUser = (email,password)=> {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const createLogIn = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser)
        })
        return () =>unSubscribe()
       
    } ,[])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        createLogIn,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;