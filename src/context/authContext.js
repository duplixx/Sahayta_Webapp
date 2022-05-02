// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
//   onAuthStateChanged,
//   GoogleAuthProvider,
// } from "firebase/auth";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [CurrentUser, setCurrentUser] = useState();
  

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged((auth,user) => {
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);
//   function Login(email, password) {
//     return signInWithEmailAndPassword(auth,email, password);
//   }
//   function SignUp(email, password) {
//     return createUserWithEmailAndPassword(auth,email, password);
//   }
//   function logOut() {
//     return logOut(auth);
//   }
//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth,googleAuthProvider)
//   }
//   const value = {
//     CurrentUser,
//     Login,
//     SignUp,
//     googleSignIn,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(userAuthContext);
}
