import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.confi";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

/* eslint-disable react/prop-types */
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    
       
    const [user, setUser] = useState(null);
 
    const createUser =(email, password)=>{
     return   createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
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
      return  signOut(auth)
    }

    const userLogInGoogle = ()=>{
      return  signInWithPopup(auth, provider)
    }
    const gitHubLogin = ()=>{
      return  signInWithPopup(auth, githubProvider)
    }

    



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                
                setUser(currentUser);
            }
            else{
                setUser(null)
            }
        });
        return () => unSubscribe()
    },[])
    const getAuth = {
        createUser,
        loginUser,
        userLogOut,
        user, 
        setUser,
        saveProfile,
        userLogInGoogle,
        gitHubLogin
        
       

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