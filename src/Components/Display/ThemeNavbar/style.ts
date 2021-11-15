import styled from "styled-components";

export const ThemeNavBar = styled.div`
    color: ${props => props.theme.themeColors.whiteColor };
    margin-right: 35px;
    
    .dropdown{
        height: 10vh;
        background: ${props => props.theme.themeColors.whiteColor };
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: auto;
        
    }
    
    .dropdown-button{
        background: none;
        border: none;
        color: ${ props => props.theme.themeColors.whiteColor };
        font-size: 18px;

        &:hover{
            color: ${ props => props.theme.themeColors.grayColor };
        }

        &:focus + ul {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0px);
        }
    }

    .themes ul{
        position: absolute;
        background: ${ props => props.theme.themeColors.whiteColor };
        margin-top: 22px;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        list-style: none;
        border-radius: 5px;
        opacity: 0;
        pointer-events: none;
        transform: translateY(10px);
        transition: all 0.4s ease;
    }

    .themes a{
        color: ${ props => props.theme.themeColors.blackColor };
        text-decoration: none;
    }

    .themes li{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &:hover{
            background-color: ${ props => props.theme.themeColors.grayColor };
            border-radius: 5px;
        }
    }

`;