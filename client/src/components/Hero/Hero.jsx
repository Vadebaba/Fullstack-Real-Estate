import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
import React, { useState } from "react";
//import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import { BsHousesFill } from "react-icons/bs";



const Hero = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();


  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };


  return (
    <section className="hero-wrapper">
      <div className="flexCenter innerWidth paddings h-container">

        {/* logo */}
        <Link to="/" className="derin">
          <BsHousesFill />
          Derin_Homes
        </Link>



        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:yungvade1@gmail.com">Contact</a>

            <NavLink to="/properties">Mortgage</NavLink>

            <NavLink to="/properties">News & Insights</NavLink>

            {/* add property */}
            <div onClick={handleAddPropertyClick}>List Property</div>
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
            {/* login button */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>


      <div className="paddings innerWidth flexCenter ">
        {/* left side */}
        <div className="flexCen hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              The #1 real estate  <br />
              site you can trust*
            </motion.h1>
          </div>
          <div className="flexCen  secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <SearchBar />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={3800} end={5000} duration={8} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1200} end={1500} duration={8} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={25} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
