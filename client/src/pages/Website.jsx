import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Website = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
    <Hero/>
    </div>
    <Companies />
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
  </div>
  )
}

export default Website