import React, { useState } from "react";
import { ThemeNavBar } from "./style";
import ThemesItems from "../../../Styles/Themes/ThemesItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPalette
} from "@fortawesome/free-solid-svg-icons";


const Dropdown: React.FC = () => {
    const [ click, setClick] = useState(false);
    
    const handleClik = () => setClick(!click);

    return (
        <ThemeNavBar className="dropdown">
            <FontAwesomeIcon icon={faPalette} />
            <div className="themes">
            <button className="dropdown-button">Themes</button>
                <ul>
                    { ThemesItems.map((item, index) => {
                        return(
                            <li key={index}><a href="#">{item.title}</a></li>
                        );
                    })}
                </ul>
            </div>
        </ThemeNavBar>
    );
}

export default Dropdown;