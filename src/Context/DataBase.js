import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fireBase";

export const DataBase = () => {
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "usuarios"));
      datos.forEach((document) => {
        console.log(document.data());
      });
    };
    obtenerDatos();
  }, []);

  return <div>DataBase</div>;
};
