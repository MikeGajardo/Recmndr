import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Card, Alert, Form, Button, Container } from "react-bootstrap";
import { getDatabase, ref, get, child } from "firebase/database";
import collage1 from "../../img/signup/collage1.jpg";
import collage2 from "../../img/signup/collage2.jpg";
import collage3 from "../../img/signup/collage3.jpg";

import "../../styles/signup.css";

export const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      history.push("/login");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }

    const dbRef = ref(getDatabase());
    get(child(dbRef, "/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="container-fluid d-flex mx-auto justify-content-center">
        <div>
          <img src={collage1} className="digga"></img>
        </div>
        <div>
          <Card className="position-relative signcard">
            <div className="container-fluid d-flex mx-auto justify-content-center">
              <img src={collage2} className="digga"></img>
            </div>
            <Card.Body
              border="white"
              style={{ width: "21rem" }}
              className="bg-dark border border-2 position-absolute top-50 start-50 translate-middle cardbod"
            >
              <h2 className="text-center mb-4 textswag">sign up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="form-signin w-100 m-auto">
                <div>
                  <h1 className="h3 mb-3 text-white-50 text-center basicbitch">
                    Create an account
                  </h1>
                  <p className="mt-5 mb-1 text-white-50 basicbitch">
                    Have an account?{" "}
                    <Link to="/Login" className="underline basicbitch">
                      Login
                    </Link>
                  </p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-1"
                    controlId="formBasicEmail"
                  >
                    <Form.Label></Form.Label>
                    <Form.Control
                      className="basicbitch"
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-white-50 basicbitch">
                      We'll never share your email with anyone.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-3 basicbitch"
                    controlId="formBasicPassword"
                  >
                    <Form.Label></Form.Label>
                    <Form.Control
                      className="basicbitch"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      className="text-white-50 basicbitch"
                      type="checkbox"
                      label="Remember me"
                    />
                  </Form.Group>
                  <Button
                    className="basicbitch"
                    variant="outline-primary"
                    type="submit"
                  >
                    SIGN UP
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <img src={collage3} className="digga"></img>
        </div>
      </div>
    </>
  );
};
export default Singup;
