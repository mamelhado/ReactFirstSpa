import React, { useState } from "react";
import { Container, ThemesDropDown, Logo } from "./style";
import Dropdown from "../ThemeNavbar";


const Header: React.FC = () => {
    const [ dropDow, setDropDown] = useState(false);
    const [ themeClick, setThemeClick ] = useState(false);



    return(
        <Container>
            <Logo>
                <h1>Logo</h1>
            </Logo>
            <ThemesDropDown>
                <Dropdown/>
            </ThemesDropDown>
        </Container>
    );
};

export default Header;