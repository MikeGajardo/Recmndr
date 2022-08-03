import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Card, Alert, Form, Button } from "react-bootstrap";

export const Signin = () => {
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="form-signin w-100 m-auto">
            <div>
              <h1 className="h3 mb-3 fw-normal">Sing in to you account</h1>
              <p className="mt-5 mb-3 text-muted">
                Don't have an account yet?{" "}
                <Link to="/" className="underline">
                  Sing up
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
