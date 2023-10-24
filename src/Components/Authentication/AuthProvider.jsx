import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "./Firebase.config";
export const AuthContext =createContext();

const AuthProvider = ({children}) => {
    const auth =getAuth(app);
    useEffect(()=>{
        setLoading(false)
         const unSubscribe =onAuthStateChanged(auth,currentUser=>setUser(currentUser))
         return unSubscribe();
     },[auth])
 
    
 const [user,setUser]=useState([])
 const [loading ,setLoading] =useState([])
    const Createuser=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const LogIn =(auth,email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(email,password)
    }


 const AuthInfo ={
    user,loading,Createuser,LogIn
 }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;