import React from "react";
import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faCogs
    , faBars
    , faTachometerAlt
    , faClipboard
    , faFireExtinguisher
    , faAddressCard
    , faTools
 } from "@fortawesome/free-solid-svg-icons";

 import paris from "../../../assets/paris.jpg";


const Sidebar: React.FC = () => {
    return(
        <Container>  
            <input type="checkbox" id="checkbox"></input>
            <label className="btn" htmlFor="checkbox">
                <FontAwesomeIcon icon={faBars} />
                <span>
                </span>
            </label>
            <div className="sidebar">
                <img src={paris} alt="Avatar" className="img_avatar"></img>
                <ul>
                    <a href="#"><li><FontAwesomeIcon icon={faCogs} />Workflows</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faClipboard} />Reports</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faTools} />Tools</li></a>
                    <a href="#" className="active"><li><FontAwesomeIcon icon={faAddressCard} />Admin</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faFireExtinguisher} />Contingency</li></a>
                </ul>
            </div>
        </Container>
    );
};

export default Sidebar;