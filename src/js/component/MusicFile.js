import React, { useState, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Container, Carousel } from "react-bootstrap";
import { UserAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../fireBase";
import { Context } from "../store/appContext.js";
import "../../styles/albums.css";

const MusicFile = ({ album }) => {
  const {store, actions} = useContext(Context)
  const [like, setLike] = useState('');
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  console.log(like, "liked");
  const userId = doc(db, "user", `${user?.email}` )
  const savedMusic = async () => {
  if(user?.email) {
    setSaved(true)
    setLike(!like)
    await updateDoc(userId, { 
     savedMusic: arrayUnion({
        id: album.id,
        title: album.name,
        img: album?.images[0].url
      })
    })
  } else {
    alert("please log in to save a music")
  }
  }
  console.log("album", album )
  return (
    <>
    <div className="">
      <Container fluid>
        <img
          className="d-block mx-auto a-cover mt-3"
          src={store.currentAlbum[0].currentImage}
          alt="Second slide"
        />
        <p className="d-block mx-auto text-center">{store.currentAlbum[0].currentName}</p>
        <Link to="/albums">
        <p className="d-block mx-auto text-center" onClick={(e) => {
          e.preventDefault()
          savedMusic()}}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
        </Link>
        <div>
          
          </div>
      </Container>
      </div>
    </>
  );
};
export default MusicFile;