import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import firebase from "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  function Login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function logOut() {
    return auth.logOut();
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return auth.signInWithPopup(googleAuthProvider)
  }
  const value = {
    currentUser,
    Login,
    signUp,
    googleSignIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
