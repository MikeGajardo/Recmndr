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
    <div className="musicmain">
      <Container fluid className="music-card">
        <img
          className="d-block mx-auto a-cover mt-5 pt-4"
          src={store.currentAlbum[0].currentImage}
          alt="Second slide"
        />
        <p className="d-block mx-auto text-center a-name">{store.currentAlbum[0].currentName}</p>
        <p className="d-block mx-auto text-center pb-4" onClick={(e) => {
          e.preventDefault()
          savedMusic()}}>
          {like ? (
            <Link to="/my-profile">
            <img className="ipod" src="https://media1.giphy.com/media/QMI6md8Rb7CWHSHND7/giphy.gif"/>
            </Link>
          ) : (
            <Link to="/my-profile">
            <img className="ipod" src="https://media1.giphy.com/media/QMI6md8Rb7CWHSHND7/giphy.gif"/>
            </Link>
          )}
        </p>
        <div>
          
          </div>
      </Container>
      </div>
    </>
  );
};
export default MusicFile;