import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Card, Alert, Form, Button, Container } from "react-bootstrap";
import digger1 from "../../img/login/digger1.jpg";
import digger2 from "../../img/login/digger2.jpg";
import digger3 from "../../img/login/digger3.jpg";

import "../../styles/signup.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      history.push("/dashboard");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex mx-auto justify-content-center">
        <div>
          <img src={digger1} className="digga"></img>
        </div>
        <div>
          <Card className="position-relative signcard">
            <img src={digger2} className="digga" />
            <Card.Body
              border="white"
              style={{ width: "21rem" }}
              className="bg-dark border border-2 position-absolute top-50 start-50 translate-middle cardbod"
            >
              <h2 className="text-center mb-4 textswag">login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="form-signin w-100 m-auto">
                <div>
                  <h1 className="h3 mb-3 text-white-50 text-center basicbitch">
                    Log in to your account
                  </h1>
                  <p className="mt-5 mb-3 text-white-50 basicbitch">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="underline basicbitch">
                      Sign Up
                    </Link>
                  </p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label></Form.Label>
                    <Form.Control
                      className="basicbitch"
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted basicbitch"></Form.Text>
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
                  <Form.Group
                    className="mb-3 basicbitch"
                    controlId="formBasicCheckbox"
                  >
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
                    href="/create-your-profile"
                  >
                    LOGIN
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <img src={digger3} className="digga"></img>
        </div>
      </div>
    </>
  );
};
export default Login;
