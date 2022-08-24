import React from "react";

import "../../styles/profiles.css";

import mellow from "../../img/profilepage/mellow.png";
import unpretentious from "../../img/profilepage/unpretentious.png";
import sophisticated from "../../img/profilepage/sophisticated.png";
import intense from "../../img/profilepage/intense.png";
import contemporary from "../../img/profilepage/contemporary.png";
import woodstock1 from "../../img/profilepage/woodstock1.jpg";
import woodstock2 from "../../img/profilepage/woodstock2.jpg";
import woodstock3 from "../../img/profilepage/woodstock3.jpg";
import deejay1 from "../../img/profilepage/deejay1.jpg";
import deejay2 from "../../img/profilepage/deejay2.jpg";
import deejay3 from "../../img/profilepage/deejay3.jpg";
import otis1 from "../../img/profilepage/otis1.jpg";
import otis2 from "../../img/profilepage/otis2.jpg";
import otis3 from "../../img/profilepage/otis3.jpg";
import miles1 from "../../img/profilepage/miles1.jpg";
import miles2 from "../../img/profilepage/miles2.jpg";
import miles3 from "../../img/profilepage/miles3.jpg";
import intense1 from "../../img/profilepage/intense1.jpg";
import intense2 from "../../img/profilepage/intense2.jpg";
import intense3 from "../../img/profilepage/intense3.jpg";
import delivery1 from "../../img/profile-mellow/delivery1.png";
import delivery2 from "../../img/profile-mellow/delivery2.png";
import delivery3 from "../../img/profile-mellow/delivery3.png";
import delivery4 from "../../img/profile-mellow/delivery4.png";
import point1 from "../../img/profile-mellow/point1.png";
import point2 from "../../img/profile-mellow/point2.png";
import point3 from "../../img/profile-mellow/point3.png";
import point4 from "../../img/profile-mellow/point4.png";
import subscribe from "../../img/profile-mellow/subscribe.png";
import receive from "../../img/profile-mellow/receive.png";
import join from "../../img/profile-mellow/join.png";
import features from "../../img/profile-mellow/features.png";
import equalizer from "../../img/profile-mellow/equalizer.jpg";
import notable from "../../img/profile-mellow/notable.jpg";
import samplesophisticated from "../../img/profile-sophisticated/samplesophisticated.png";
import axelrod from "../../img/profile-sophisticated/axelrod.png";
import bob from "../../img/profile-sophisticated/bob.jpg";
import cymande from "../../img/profile-sophisticated/cymande.jpg";
import dave from "../../img/profile-sophisticated/dave.jpg";
import milesd from "../../img/profile-sophisticated/milesd.jpg";
import Spotify from "react-spotify-embed";

export const Dbsophisticated = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start pmain fontp">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link shadow-sm rounded"
            id="v-pills-mellow-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-mellow"
            type="button"
            role="tab"
            aria-controls="v-pills-mellow"
            aria-selected="false"
          >
            <img src={mellow} className="instruments" />
            <strong id="lettercolor">m</strong>ellow
          </button>
          <button
            className="nav-link shadow-sm rounded"
            id="v-pills-unpretentious-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-unpretentious"
            type="button"
            role="tab"
            aria-controls="v-pills-unpretentious"
            aria-selected="false"
          >
            <img src={unpretentious} className="instruments" />
            <strong id="lettercolor">u</strong>npretentious
          </button>
          <button
            className="nav-link active shadow-sm rounded"
            id="v-pills-sophisticated-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-sophisticated"
            type="button"
            role="tab"
            aria-controls="v-pills-sophisticated"
            aria-selected="true"
          >
            <img src={sophisticated} className="instruments" />
            <strong id="lettercolor">s</strong>ophisticated
          </button>
          <button
            className="nav-link shadow-sm rounded"
            id="v-pills-intense-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-intense"
            type="button"
            role="tab"
            aria-controls="v-pills-intense"
            aria-selected="false"
          >
            <img src={intense} className="instruments" />
            <strong id="lettercolor">i</strong>ntense
          </button>
          <button
            className="nav-link shadow-sm rounded"
            id="v-pills-contemporary-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-contemporary"
            type="button"
            role="tab"
            aria-controls="v-pills-contemporary"
            aria-selected="false"
          >
            <img src={contemporary} className="instruments" />
            <strong id="lettercolor">c</strong>ontemporary
          </button>
          {/* End of Pills */}
        </div>

        <div className="tab-content" id="v-pills-tabContent">
          {/* Mellow Page */}
          <div
            className="tab-pane fade mellowpane"
            id="v-pills-mellow"
            role="tabpanel"
            aria-labelledby="v-pills-mellow-tab"
          >
            {/* Code here */}
            <div className="container-fluid mellowcolor">
              <div className="d-flex justify-content-center">
                <a href="/my-profile/mellow">
                  <img src={otis1} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/mellow">
                  <img src={otis2} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/mellow">
                  <img src={otis3} className="imgcover" />
                </a>
              </div>
            </div>

            {/* Mellow End */}
          </div>
          {/* Unpretentious Page */}
          <div
            className="tab-pane fade"
            id="v-pills-unpretentious"
            role="tabpanel"
            aria-labelledby="v-pills-unpretentious-tab"
          >
            {" "}
            {/* Code here */}
            <div className="container-fluid" id="unpretcol">
              <div className="d-flex justify-content-center">
                <a href="/my-profile/unpretentious">
                  <img src={woodstock1} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/unpretentious">
                  <img src={woodstock2} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/unpretentious">
                  <img src={woodstock3} className="imgcover" />
                </a>
              </div>
            </div>
            {/* Unpretentious End */}
          </div>
          {/* Sophisticated Page */}
          <div
            className="tab-pane fade show active"
            id="v-pills-sophisticated"
            role="tabpanel"
            aria-labelledby="v-pills-sophisticated-tab"
          >
            {/* Code here */}
            <div className="container-fluid" id="sophiscol">
              <div className="container-fluid mellowcolor">
                <div className="d-flex justify-content-center">
                  <a href="#intro">
                    <img src={miles1} className="imgcover" />
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <span>&nbsp;</span>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#intro">
                    <img src={miles2} className="imgcover" />
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <span>&nbsp;</span>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#intro">
                    <img src={miles3} className="imgcover" />
                  </a>
                </div>
              </div>
            </div>

            {/* sophisticated edit start */}

            <div className="d-flex mx-auto justify-content-center">
            <a href="#intro"><img src={sophisticated} className="iconics" id="iconics" /></a>
            </div>

            <div className="d-flex justify-content-center" id="intro">
              <a href="#records"> <img src={samplesophisticated} className="delivery" /></a>
            </div>

            <div className="d-flex justify-content-center" id="records">
              <a href="#covers"><img src={receive} className="receive" /></a>
            </div>

            <div className="card-deck d-flex albumz" id="covers">
              <div className="card">
                <img className="card-img-top" src={milesd} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">
                    Miles Davis
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Bitches Brew</small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={axelrod} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">
                    David Axelrod
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Song of Innocence</small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={cymande} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">
                    Cymande
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Cymande</small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bob} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">
                    Bob James
                  </p>
                  <p className="card-text">
                    <small className="text-muted">One</small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={dave} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">
                    The Dave Brubeck Quartet
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Time Out</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex mx-auto justify-content-center">
              <a href="#soul">
                <img src={notable} className="notable"></img>
              </a>
            </div>

            <div className="d-flex mx-auto justify-content-center spotify">
              <Spotify link="https://open.spotify.com/track/15tLhnzO4o8fMOEjdZGfII?si=3734a183f4c54f3d" id="miles"></Spotify>
              <Spotify link="https://open.spotify.com/track/0aurAmzvkM6KSaaoNIofZ7?si=8f698dfa514b4d8b" id="axelrod"></Spotify>
              <Spotify link="https://open.spotify.com/track/6dckUAPaw3WF2ZyhEACQDK?si=88390a0ec36a46d3" id="cymande"></Spotify>
              <Spotify link="https://open.spotify.com/track/2emP5oaNH6cwFsugIPqVau?si=b1fd5c1edf844eef" id="bobjames"></Spotify>
              <Spotify link="https://open.spotify.com/track/1YQWosTIljIvxAgHWTp7KP?si=678800240114413c" id="brubeck"></Spotify>
            </div>

            <div className="d-flex justify-content-center">
              <img src={equalizer} className="equalizer" />
            </div>

            <div className="d-flex justify-content-center">
              <img src={join} className="spacer" id="soul" />
            </div>

            <div className="d-flex mx-auto justify-content-center">
              <a href="#invader">
              <img src={delivery1} className="del" />
              <img src={delivery2} className="del" />
              <img src={delivery3} className="del" />
              <img src={delivery4} className="del" /></a>
            </div>

            <div className="d-flex justify-content-center">
              <img src={equalizer} className="equalizer" />
            </div>

            <div className="d-flex justify-content-center">
              <img src={features} className="spacer" id="invader" />
            </div>

            <div className="d-flex mx-auto justify-content-center">
            <a href="#join">
              <img src={point1} className="points" />
              <img src={point2} className="points" />
              <img src={point3} className="points" />
              <img src={point4} className="points" />
              </a>
            </div>

            <div className="d-flex justify-content-center">
              <img src={equalizer} className="equalizer" />
            </div>

            <div className="d-flex justify-content-center" >
              <a href="/checkout">
                <img src={subscribe} className="sub" id="join"/></a>
            </div>

            {/* sophisiticated end */}
          </div>
          {/* Intense Page */}
          <div
            className="tab-pane fade"
            id="v-pills-intense"
            role="tabpanel"
            aria-labelledby="v-pills-intense-tab"
          >
            {/* Code here */}
            <div className="container-fluid intnscol">
              <div className="d-flex justify-content-center">
                <a href="/my-profile/intense">
                  <img src={intense1} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/intense">
                  <img src={intense2} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/intense">
                  <img src={intense3} className="imgcover" />
                </a>
              </div>
            </div>
          </div>
          {/* Contemporary Page */}
          <div
            className="tab-pane fade"
            id="v-pills-contemporary"
            role="tabpanel"
            aria-labelledby="v-pills-contemporary-tab"
          >
            {/* Code here */}
            <div className="container-fluid" id="sophiscol">
              <div className="d-flex justify-content-center">
                <a href="/my-profile/contemporary">
                  <img src={deejay1} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/contemporary">
                  <img src={deejay2} className="imgcover" />
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <span>&nbsp;</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="/my-profile/contemporary">
                  <img src={deejay3} className="imgcover" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dbsophisticated;