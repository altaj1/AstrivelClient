import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.confi";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

/* eslint-disable react/prop-types */
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
 
    const createUser =(email, password)=>{
        setLoading(true)
     return   createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const saveProfile = (name, photo)=>{
        console.log(name, photo)
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        })
    }


    const userLogOut = ()=>{
        setLoading(true)
        setUser(null)
      return  signOut(auth)
    }

    const userLogInGoogle = ()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
    }
    const gitHubLogin = ()=>{
        setLoading(true)
      return  signInWithPopup(auth, githubProvider)
    }

    



   // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])
    const getAuth = {
        createUser,
        loginUser,
        userLogOut,
        user, 
        setUser,
        saveProfile,
        userLogInGoogle,
        gitHubLogin,
        loading,
        setLoading
       

    }
    return (
        <div>
            <AuthContext.Provider value={getAuth}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;