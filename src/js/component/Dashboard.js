import React, { useState, useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../fireBase";


export const Dashboard = () => {
  const { user, logout } = UserAuth();
  const history = useHistory();
  const [data, setData] = useState([]);
console.log("this Data", data )
  const handleLogout = async () => {
    try {
      await logout();
      // history.push("/Signin");
      console.log("You are log out");
    } catch (e) {
      console.log(e.message);
    }
  };
 
    const placeholder = []

    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "usuarios"));
      datos.forEach((doc) => {
        placeholder.push(`${doc.id} => ${doc.data().nombre + " " + doc.data().edad}`);
      });
      setData("placeholder", placeholder)
      console.log("placeholder", placeholder)
    };
    obtenerDatos();
 

  return (
    <>
    <div className="w-full text-white">
    <img
            className="w-full h[400px] object-cover"
            src="https://picsum.photos/200/300"
            alt="/"
          />
          <div className="bg-dark fixed top-0 left-0 h-[550px]"></div>
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="">My music</h1>
          </div>
    </div>
    </>
  );
};
