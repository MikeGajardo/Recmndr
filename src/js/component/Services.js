import React from "react";
import "../../styles/albums.css";
import albumwall from "../../img/albums/albumwall.jpg"

import { useContext, useEffect, useState } from "react";

import {
  Button,
  Card,
  Carousel,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import MusicFile from "../component/MusicFile";

const CLIENT_ID = "c84bc9400d084613ad02791a90a34969";
const CLIENT_SECRET = "f9775eadb59a4ea7ae4cbe1189d53b82";

const Services = () => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    var authParametes = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParametes)
      .then((result) => result.json())
      .then((data) => setToken(data.access_token));
  }, []);
  const search = async (e) => {
    console.log("search" + input); // Taylor Swift
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + input + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("artistID" + artistID);

    var collectionOfAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data###", data);
        setAlbums(data.items);
      });
  };
  useEffect(() => {
    console.log("store.currentAlbum###", store.currentAlbum);
  }, [store.currentAlbum]);
  function sendMeToMusicFile(image, name) {
    store.currentAlbum.push({ currentImage: image, currentName: name });
    setTimeout(() => console.log("store.currentAlbum###", store.currentAlbum), 2000)
  }
  return (
    <div className="">
     <div className="">
     <img src={albumwall} className="d-block mx-auto py-4 hero" alt="..." />
     </div>
      <Container>
        <InputGroup className="mb-3 py-2" size="lg">
          <FormControl
            placeholder="Search for an Artist on your radar..."
            type="input"
            onKeyPress={(e) => {
              if (e.key == "enter") {
                search();
              }
            }}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
        <Button className="mx-3 mb-3 btn btn-secondary" 
        onClick={search}>Search</Button>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, i) => {
            return (
              <Card>
                <Card.Img src={album.images[0].url} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Link to="/Musicfile">
                    <Button
                      className="btn btn-secondary"
                      onClick={() => sendMeToMusicFile(
                        album.images[0].url,
                        album.name
                      )}
                    >
                      single album
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
