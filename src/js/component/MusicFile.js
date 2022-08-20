import React, { useState, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Container, Carousel } from "react-bootstrap";
import { UserAuth } from "../../Context/AuthContext";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Context } from "../store/appContext.js";
const MusicFile = ({ album }) => {
  const {store, actions} = useContext(Context)
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  const userId = doc(db, "user", `${user?.email}` )
  const savedMusic = (currentUser, album) => {
    console.log("dentro de savdMusic")
    actions.addToFavoriteList(currentUser, album)
  // if(user?.email) {
  //   setLike(!like)
  //   setSaved(true)
  //   await updateDoc(userId, {
  //     savedMusic: arrayUnion({
  //       id: album.id,
  //       title: album.name,
  //       img: album?.images[0].url
  //     })
  //   })
  // } else {
  //   alert("please log in to save a music")
  // }
  }
  console.log("album", album )
  return (
    <>
    <div className="">
      <Container fluid>
        <img
          className="d-block w-100"
          src={store.currentAlbum[0].currentImage}
          alt="Second slide"
        />
        <p>{store.currentAlbum[0].currentName}</p>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={album?.images[0].url}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{album.name}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        <p onClick={ () => savedMusic("test@test.com" ,store.currentAlbum[0].currentName) }>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
        {/* <Carousel.Item>
          <img
          className="d-block w-100"
          src={album.images[0].url}
          alt="First slide"
          />
          <Carousel.Caption>
          <h3>{album.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              alt="Second slide"
              />
              <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              alt="Third slide"
              />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
            <p onClick={saveMusic}>
              {like ? (
                <FaHeart className="absolute top-4 left-4 text-gray-300" />
                ) : (
                  <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                  )}
                  </p>
                </Carousel.Item> */}
      </Container>
      </div>
    </>
  );
};
export default MusicFile;