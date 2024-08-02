import React from "react";
import "./Footer.css";
import SocialX from "../../utils/social-x.svg"
import SocialInsta from "../../utils/social-insta.svg";
import SocialYoutube from "../../utils/social-youtube.svg";
import { BsHousesFill } from "react-icons/bs";



const Footer = () => {
  return (
    <section className="sect">
      <div className="f-wrapper">
        <div className="text">
          <span className="primaryText">
            <BsHousesFill />
            Derin_Homes
          </span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit,
            <br />
            Magnam repudiandae quidem eius ipsum animi ullam,
            <br />
            Magnam repudiandae quidem eius ipsum.
          </span>
        </div>

        <div className="option">
          <h5>About</h5>  
          <a href="/">Contact</a>
          <a href="/">Mortgage</a>
          <a href="/">Properties</a>
          <a href="/">News & Insights</a>

        </div>

        <div className="option">
          <h5>Legal</h5>
          <a href="/privacy-policy">Customer Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/privacy-policy">Terms of Service</a>
        </div>
</div>


        <div className="f-social">
          <div className="gap">

            <img src={SocialX} alt="social-x" />
            <img src={SocialInsta} alt="sociali" />
            <img src={SocialYoutube} alt="social-pin" />

          </div>

          <p className="text-muted-foreground">
            ©{" "}
            <a href="/">Derin_Homes</a>.
            All rights reserved. 2024-present.
          </p>
        </div>
      
    </section>
  );
};

export default Footer;
