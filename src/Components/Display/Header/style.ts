import styled from "styled-components";

export const Container = styled.div`
    grid-area: HD;
    background-color: ${ props => props.theme.themeColors.primaryColor };
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    border-bottom: 1px solid ${ props => props.theme.themeColors.grayColor };
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 5px;
    margin-left: 10px;
    color: ${ props => props.theme.themeColors.whiteColor };

    > h2{
        color: white;
        margin-left: 7px;
    }

    > img{
        width: 130px;
        height: 50px;
    }
    
    `;

export const ThemesDropDown = styled.div`
    color: ${ props => props.theme.themeColors.whiteColor };
    
    .icons{
        cursor: pointer;
    }
`;