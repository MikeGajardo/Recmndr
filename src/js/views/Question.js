import React from 'react'

export const Question = () => {
    return (
      <div className="container d-flex">
        <div className="vinyl-container">
          <img src="https://vinyl-records.nl/metallica/justice-for-all-netherlands/metallica-and-justice-for-all-netherlands-vinyl-lp-869.jpg" />
        </div>
        <div className="question-container">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
          Default radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
          <label class="form-check-label" for="exampleRadios2">
      Second default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
    <label class="form-check-label" for="exampleRadios3">
      Disabled radio
    </label>
  </div>
        </div>
      </div>
    );
  };
  
  export default Question;