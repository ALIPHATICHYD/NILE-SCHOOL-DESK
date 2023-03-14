import React from "react";
import { StyledFounder } from "../styles/founderStyle";
import { StyledButton } from "../styles/HomePage";
import founder from '../assets/Images/founder image.svg'
const Founder = () => {
  return (
    <StyledFounder>
      <div className="founder-text">
        <div className="founder-better">Better learning. Better result</div>
        <div className="founder-online">
          Online education platform <br /> fit for everyone
        </div>
        <div className="hero-para">
          Join 95% of Nigeria. schools using 9jaschooldesk to engage <br /> kids and
          connect with families! Free for teachers, forever.
        </div>
        <StyledButton>
        Explore more about us
        </StyledButton>
      </div>
      <div className="founder-picture"><img src={founder} alt="" /></div>
    </StyledFounder>
  );
};

export default Founder;
