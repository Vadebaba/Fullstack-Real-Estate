import React from "react";
import './Companies.css'

import Marquee from 'react-fast-marquee';

const Companies = () => {
  return (
    <div className="App">
      <div className="title" >


        <Marquee pauseOnHover delay={2} gradient>
        <div className="imagewrapper">           
          <img src="./tower.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./equinix.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./realty.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./tower.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./equinix.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./realty.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./equinix.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./realty.png" alt="" />
          </div>

          <div className="imagewrapper">           
          <img src="./tower.png" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;
