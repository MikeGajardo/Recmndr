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
                    <Link className="dropdown-item" to="/create-your-profile">
                      Music Profile
                    </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/my-profile">
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/albums">
                        Album Search
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/aboutus">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/feedback">
                        Feedback
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signup">
                        Sign Up
                      </Link>
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
