import React, { useState } from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { Container, Carousel  } from "react-bootstrap";
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
import { db } from "../../fireBase";


const MusicFile = () => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const musicID = doc(db, "user"`${user?.email}`);

  const saveMusic = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(musicID, {
        saveMusic: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save an album");
    }
  };

  const handleSelect = (selectedIndex, e) => {
    setLike(selectedIndex);
  };

  const [loading, setLoading] = useState(true);

  return (
    <>
    <Container>
      <Carousel activeIndex={like} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/300"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
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
        </Carousel.Item>
      </Carousel>
      </Container>
    </>
  );
};

export default MusicFile;
