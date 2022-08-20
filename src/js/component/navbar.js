import React from "react";
import { Link } from "react-router-dom";

import "../../styles/homepage.css";

import mndrwide from "../../img/navbar/mndrwide.jpg";
import dj from "../../img/navbar/dj.png";
import tiktoksignup from "../../img/navbar/tiktoksignup.png";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img id="logo" className="logo" src={mndrwide} />
          </a>
          <div className="d-flex">
            <div className="btn-group" role="group">
              <a href="/Login">
              <button
                type="button"
                className="btn"
                id="loginbutton"

              >
                login
              </button>
              </a>
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
                  <li>
                    <a className="dropdown-item" href="/create-your-profile">
                      Quiz
                    </a>
                    <li>
                      <a className="dropdown-item" href="/my-profile/">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/services">
                        Albums
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
