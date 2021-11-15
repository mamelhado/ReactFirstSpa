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
                    <a href="#"><li><FontAwesomeIcon icon={faCogs} />Menu 1</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faClipboard} />Menu 2</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faTools} />Menu 3</li></a>
                    <a href="#" className="active"><li><FontAwesomeIcon icon={faAddressCard} />Menu 4</li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faFireExtinguisher} />Menu 5</li></a>
                </ul>
            </div>
        </Container>
    );
};

export default Sidebar;