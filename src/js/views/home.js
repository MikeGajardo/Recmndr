import React from "react";

//include images into your bundle
import mndrwide from "../../img/mndrwide.jpg";
import basslogo from "../../img/basslogo.png";
import dj from "../../img/dj.png";
import audio from "../../img/audio.png";
import mixer from "../../img/mixer.png";
import records from "../../img/records.jpg";
import tiktokexample from "../../img/tiktokexample.png";
import tiktoksignup from "../../img/tiktoksignup.png";

//create your first component
const Home = () => {
  return (
    <body>
      <nav class="navbar fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={mndrwide} />
          </a>
          <div class="d-flex">
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn"
                id="loginbutton"
                // Modal Properties
                data-bs-toggle="modal"
                data-bs-target="#exampleModalToggle"
              >
                login
              </button>
              <div class="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  class="btn bass dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={dj} class="img-fluid bass" />
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="btnGroupDrop1"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sign Up
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
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                Modal 1: Tiktok Login Modal
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img src={tiktokexample} className="tiktok" />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
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
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                Modal 2: Sign Up Page
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img src={tiktoksignup} className="tiktok" />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
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

      <div>
        <h1 className="text-center mt-5">&nbsp;</h1>
        <h1 className="text-center mt-5">[CONCEPT / PRE-ALPHA]</h1>
        <h1 className="text-center mt-5">
          <img src={records} class="img-fluid records" />
        </h1>
        <br></br>
        <h1 className="text-center mt-5 main">we are recomndr. . .</h1>
        <h1 className="text-center mt-5 main">
          <i>. . .we're all recomndrs</i>
        </h1>
        <br></br>
      </div>
      <div className="footer text-center mt-5">
        Follow us&nbsp;&nbsp;
        <a href="https://twitter.com/reco_mndr" target="_blank">
          <i class="fab fa-twitter socials" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/reco_mndr/" target="_blank">
          <i class="fab fa-instagram socials" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100083326643863"
          target="_blank"
        >
          <i class="fab fa-facebook-f socials" aria-hidden="true"></i>
        </a>
      </div>
    </body>
  );
};

export default Home;
