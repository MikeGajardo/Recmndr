import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth, db } from "../fireBase";
import { setDoc, doc, getDoc, collection, addDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "user", email), {
      savedDoc: [],
    });
    addDoc(collection(db, "user"), {
      name: "email",
    });
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const loginWhitGoogle = () => {
    const googleProvaider = new GoogleAuthProvider();
    return signInWithRedirect(auth, googleProvaider);
  };
  const getTask = () => getDoc(collection(db, "user", email));

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
