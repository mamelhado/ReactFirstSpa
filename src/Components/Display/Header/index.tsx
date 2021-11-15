import React from "react";
import { Container, Logo } from "./style";

const Header: React.FC = () => {
    return(
        <Container>
            <Logo>
                <h1>Logo</h1>
            </Logo>
        </Container>
    );
};

export default Header;