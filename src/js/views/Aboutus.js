import React from 'react'
import disclaimer from '../../img/aboutus/disclaimer.png';
import qrcode from '../../img/aboutus/qrcode.png';
import follow from '../../img/aboutus/follow.png';
import about from '../../img/aboutus/about.png';
import beastie from '../../img/aboutus/beastie.jpg';
import crafted from '../../img/aboutus/crafted.png';
import challenges from '../../img/aboutus/challenges.png';
import future from '../../img/aboutus/future.png';
import pi from '../../img/aboutus/pi.png';
import vision from '../../img/aboutus/vision.jpg';

import "../../styles/aboutus.css";

function Aboutus() {
  return (
    <div className='container'>
      <div className='d-flex mx-auto justify-content-center disclaimer'><img src={disclaimer} className="aboutimg" /></div>
      <div className='d-flex mx-auto justify-content-center'><img src={follow} className="aboutimg" /></div>
      <div className='d-flex mx-auto justify-content-center'><a href='https://github.com/MikeGajardo/Recmndr' className='qrcode' id='qrcode' target="_blank"><img src={qrcode} /></a></div>
      <div className='d-flex mx-auto justify-content-center'><img src={about} className="boutus" id='boutus'/></div>
      <div className='d-flex mx-auto justify-content-center'><img src={crafted} className="crafted" /></div>
      <div className='d-flex mx-auto justify-content-center'><img src={beastie} className="boutus" /></div>
      <div className='d-flex mx-auto justify-content-center'><img src={challenges} className="boutus" /></div>
      <div className='d-flex mx-auto justify-content-center'><img src={pi} className="boutus" /></div>
      <div className='d-flex mx-auto justify-content-center'><img src={future} className="boutus" /></div>
      <div className='d-flex mx-auto justify-content-center'><img src={vision} className="boutus" /></div>
      

    
    </div>
  )
}

export default Aboutus