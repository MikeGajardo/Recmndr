import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../fireBase";
import { collection, setDoc, doc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
     createUserWithEmailAndPassword(auth, email, password);
     setDoc(doc(db, "user", email), {
      savedDoc: []
     })
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const loginWhitGoogle = () => {
    const googleProvaider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvaider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <UserContext.Provider
      value={{ createUser, user, signIn, logout, loading, loginWhitGoogle }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
