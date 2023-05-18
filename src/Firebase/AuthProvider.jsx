import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './Firebase.config';
import { useEffect } from 'react';


export const themeContext = createContext(null)



const AuthProvider = ({children}) => {
  const [loader,setLoader] = useState(true)
    const [user,setUser] = useState(null)
    const auth = getAuth(app);


    // provider all 
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();



    const createUser = (email,password) => {
      setLoader(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const signHandle = (email,password) => {
      setLoader(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
      setLoader(true)
      return signOut(auth)
    }
    const profileUpdate = (_name,photo_url) => {
      return updateProfile(auth.currentUser,{
        displayName: _name,
        photoURL: photo_url
      })
    }


    const signInGoogle = () => {
      setLoader(true);
      return signInWithPopup(auth, googleProvider)
    }

    const signInGithub = () => {
      setLoader(true);
      return signInWithPopup(auth, githubProvider)
    }


    const authInfo = {
        user,
        setUser,
        createUser,
        signHandle,
        loader,
        logOut,
        profileUpdate,
        signInGoogle,
        signInGithub,
    }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth,(loggedUser) => {
        setUser(loggedUser);
        setLoader(false);
      })
      return () => {
        unsubscribe();
      };
    },[])

  return (
    <themeContext.Provider value={authInfo}>
        {
            children
        }
    </themeContext.Provider>
  )
}

export default AuthProvider