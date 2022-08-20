import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";

import "../../styles/homepage.css";

import mndrwide from "../../img/navbar/mndrwide.jpg";
import dj from "../../img/navbar/dj.png";
import tiktoksignup from "../../img/navbar/tiktoksignup.png";

export const Navbar = () => {

  const history = useHistory();
  // const { logout } = UserAuth();

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
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img id="logo" className="logo" src={mndrwide} />
          </a>
          <div className="d-flex">
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn"
                id="loginbutton"
                // Modal Properties
                data-bs-toggle="modal"
                data-bs-target="#exampleModalToggle"
              >
                login
              </button>
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn bass dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={dj} className="img-fluid bass" />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="btnGroupDrop1"
                >
                 
                    <a className="dropdown-item" href="/create-your-profile/">
                      Quiz
                    </a>
                    <li>
                      <a className="dropdown-item" href="/my-profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/aboutus">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/feedback">
                        Feedback
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={handleLogout}>
                        Log out 
                      </a>
                    </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Modal 1: Tiktok Login Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Link to="/login">Login</Link>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Modal 2: Sign Up Page
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={tiktoksignup} className="tiktok" />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}
    </div>
  );
};
