import React from "react";

import "../../styles/homepage.css";


//include images into your bundle
import records from "../../img/records.jpg";


//create your first component
const Homepage = () => {
  return (
    <body>
      <div>
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
    </body>
  );
};

export default Homepage;