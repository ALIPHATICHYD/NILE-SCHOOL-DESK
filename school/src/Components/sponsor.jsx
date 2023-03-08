import React from "react";
import { StyledSponsor } from "../styles/sponsorStyle";
import acuity from '../assets/Images/acuityventures.5a6b7c1.svg.svg'
import ingressive from '../assets/Images/ingressive.2541889.png.svg'
import syndicate from '../assets/Images/syndicate.962b56b.png.svg'
import Heli from '../assets/Images/helicarrier.ebb49b0.svg.svg'
import union from '../assets/Images/union54.9f26790.svg.svg'
import magic from '../assets/Images/magicfund.6b34793.svg.svg'
const Sponsor = () =>{
    return(
        <SponsorDetails />
    )
}
export default Sponsor;

const SponsorDetails = () =>{
    return(
        <StyledSponsor>
        <h4>More than <span className="orange">200+ leading schools and tutors</span> trust us</h4>
        <div className="sponsor-logo">
            <img src={acuity} alt="acutiy image" className="sponsor-image"/>
            <img src={ingressive} alt="ingressive image" className="sponsor-image"/>
            <img src={syndicate} alt="syndicate image" className="sponsor-image"/>
            <img src={Heli} alt="Heli image" className="sponsor-image"/>
            <img src={union} alt="union image" className="sponsor-image"/>
            <img src={magic} alt="magic image" className="sponsor-image"/>
        </div>
    </StyledSponsor>
    )
}