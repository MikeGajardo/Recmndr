import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Card, Alert, Form, Button, Container } from "react-bootstrap";
import { getDatabase, ref, get, child } from "firebase/database";


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
    <Container>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="form-signin w-100 m-auto">
            <div>
              <h1 className="h3 mb-3 fw-normal">Create an account</h1>
              <p className="mt-5 mb-3 text-muted">
               If you have a account{" "}
                <Link to="/Login" className="underline">
                  Login
                </Link>
              </p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" href="/create-your-profile">
                Submit
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
      </Container>
    </>
  );
};
export default Singup
