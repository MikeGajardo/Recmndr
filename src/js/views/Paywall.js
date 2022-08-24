import React from "react";
import "../../styles/paywall.css"; 

export const Paywall = () => {
  return (
<div className='check-container'>
        <div className="check-card mx-auto col-md-5 col-8 mt-3 p-0">
            <h3 className="mx-auto check-header">Let Us Do the Crate Digging</h3> 
            <img className='mx-auto pic check-img'
                src="https://c.tenor.com/xnDLQ4WRYr0AAAAd/vinyl-records.gif"/>
            <div className="card-title d-flex px-4">
                <p className="item text-muted">4 Records a Month</p>
                <p>$69</p>
            </div>
            <div className="card-body">
                <p className="text-muted">Your payment details</p>
                <div className="numbr mb-3">
                    <i className=" col-1 fas fa-credit-card text-muted p-0"></i>
                    <input className="col-10 p-0" type="text" placeholder="Card Number"/>
                </div>
                <div className="line2 col-lg-12 col-12 mb-4">
                    <i className="col-1 far fa-calendar-minus text-muted p-0"></i>
                    <input className="cal col-5 p-0" type="text" placeholder="MM/YY"/>
                    <i className="col-1 fas fa-lock text-muted"></i>
                    <input className="cvc col-5 p-0" type="text" placeholder="CVC"/>
                </div>
            </div>
            <div class="footer-check text-center p-0">
                <div class="col-lg-12 col-12 p-0">
                    <p class="order">Order Now</p>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Paywall;
