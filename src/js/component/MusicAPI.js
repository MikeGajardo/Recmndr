import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const CLIENT_ID = "c84bc9400d084613ad02791a90a34969";
const CLIENT_SECRET = "f9775eadb59a4ea7ae4cbe1189d53b82";

const MusicAPI = () => {
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
        console.log(data);
        setAlbums(data.items);
      });
  };

  return (
    <div className="">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search"
            type="input"
            onKeyPress={(e) => {
              if (e.key == "enter") {
                search();
              }
            }}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
        <Button onClick={search}>search</Button>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, i) => {
            return (
              <Card>
                <Card.Img src={album.images[0].url} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MusicAPI;
