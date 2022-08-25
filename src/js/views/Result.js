import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/result.css";
import {
  Button,
  Card,
  Carousel,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

export const Result = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <Container>
        <h3 className="my-4 text-center result-header"><u>MY WISHLIST</u></h3>
        <Row className="mx-2 row row-cols-4">
          {store.currentAlbum.map((item, index) => {
            return (
              <>
                <Card>
                  <Card.Img src={item.currentImage} />
                  <Card.Body>
                    <Card.Title>{item.currentName}</Card.Title>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Result;
