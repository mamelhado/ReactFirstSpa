import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    background-color: ${ props => props.theme.themeColors.secondaryColor };
    
    > h1{
        color: ${ props => props.theme.themeColors.grayColor };
    }
`;