import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";


// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (

    <div >

      <section id="value" className="v-wrapper"
          data-aos="fade-up"
          data-aos-delay={data.aosDelay}
      >
        {/*  <div className="value">
          <span className="primaryText">Discover how we can help</span>
        </div>*/}

        <div className="value">
          <span className="primaryText">Discover how we can help</span>
        </div>

        <div className="paddings innerWidth flexCenter v-container">

          {/* left side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./rrr.jpg" alt="" />
            </div>
          </div>

          {/* right */}
          <div className="flexColStart v-right">
            <h6><spn>OUR SERVICE</spn></h6>
            <span className="blackText">Comfort is our
              <br />
              Top priority for you
            </span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton ">
                        {/* just for getting state of item */}
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span
                          className="primaryText"
                        >
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Value;
