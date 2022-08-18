import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../../fireBase";

const SavedMusic = () => {
  const [musica, setMusica] = useState([]);
  const { user } = UserAuth;
  useEffect(() => {
    onSnapshot(
      doc(db, "users", `${user?.email}`, (doc) => {
        setMusica(doc.data()?.savedMovies);
      })
    );
  }, [user?.email]);
  const musicaRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (passedID) => {
    try {
      const result = musica.filter((item) => item.id !== passedID);
      await updateDoc(musicaRef, {
        savedMusic: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <h2>{title}</h2>
      <Container>
        <Overlay>
          <Carousel fade>
            {musica.map((item, id) => {
              <div key={id} className="d-block w-100">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                      alt={item?.title}
                    />
                  </Carousel.Item>
                  <Carousel.Caption>
                    <h3>{item?.title}</h3>
                    <p
                      onClick={() => {
                        deleteMovie(item.id);
                      }}
                      className="btn-close btn-close-white"
                      disabled
                      aria-label="Close"
                    >
                      <AiOutlineClose />
                    </p>
                  </Carousel.Caption>
                </Carousel>
              </div>;
            })}
          </Carousel>
        </Overlay>
      </Container>
    </>
  );
};

export default SavedMusic;