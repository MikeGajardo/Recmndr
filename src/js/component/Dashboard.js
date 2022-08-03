import React from "react";
import { UserAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

export const Dashboard = () => {
  const { user, logout } = UserAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      // history.push("/Signin");
      console.log("You are log out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
    <Card>
    <Card.Body>
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="py-4">dashboard</h1>
      {/* <p>user: {user && user.email}</p> */}
      <button
        onClick={handleLogout}
        className="btn btn-success border px-6 py-2 my-4"
      >
        Logout
      </button>
    </div>
      </Card.Body>
      </Card>
      </>
  );
};