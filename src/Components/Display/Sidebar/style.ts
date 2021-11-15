import styled from "styled-components";

export const Container = styled.div`
    grid-area: SB;

    #checkbox, .btn span { /* Hide the checkbox input & word "Menu" in the button */
        display: none;
    }

    /* Menu button - starts */
    .btn {
        display: block;
        background-color: ${props => props.theme.themeColors.primaryColor};
        color: ${ props => props.theme.themeColors.whiteColor };
        width: 55px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        cursor: pointer;
        transition: width .3s ease-in-out;
    }
    /* Menu button - ends */

    /* Sidebar - starts */
    .sidebar {
        background-color: ${props => props.theme.themeColors.primaryColor};
        position: fixed;
        width: 250px;
        height: 100%;
        z-index: 1111;
        transition: transform .3s ease-in-out;
        transform: translateX(-250px);
    }

    .sidebar ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    .sidebar ul a {
        position: relative;
        text-decoration: none;
        display: block;
        background-color: transparent;
        color: #BAB5BD;
        padding: 15px 20px;
        font-size: 16px;
    }

    .sidebar ul a li i {
        margin-right: 15px;
    }

    /* Add the word "New" to the second item and "2" to the third item */
    .sidebar ul a:nth-child(2)::after, .sidebar ul a:nth-child(3)::after {
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -9px;
        color: ${ props => props.theme.themeColors.whiteColor };
        font-size: 13px;
        padding: 0 7px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    .sidebar ul a:nth-child(2)::after {
        content: "New";
        background-color: tomato;
    }

    .sidebar ul a:nth-child(3)::after {
        content: "2";
        background-color: ${ props => props.theme.themeColors.tertiaryColor };
    }

    /* Add margin to the icon in the second item */
    .sidebar ul a:nth-child(2) li i {
        margin-left: 4px;
        margin-right: 19px;
    }

    .sidebar ul a:hover, .sidebar ul a.active {
        background-color: #161920;
        color: ${ props => props.theme.themeColors.whiteColor };
    }

    .sidebar ul a:hover::before, .sidebar ul a.active::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background-color: ${ props => props.theme.themeColors.tertiaryColor };
        width: 4px;
        height: 100%;
    }
    /* Sidebar - ends */

    /* Effect of showing the sidebar - starts */
    #checkbox:checked ~ .sidebar {
        transform: translateX(0);
    }

    #checkbox:checked + .btn {
        width: 250px;
        padding: 0 20px;
    }

    #checkbox:checked + .btn span { /* Show again the word "Menu" in the button */
        display: inline;
    }
    /* Effect of showing the sidebar - ends */ 
    
    .img_avatar {
        align-items: center;
        border: 4px solid ${ props => props.theme.themeColors.avatarBorderColor };
        border-radius: 50%;
        padding: 1px;
        left: 60px;
        width: 125px;
        height: 125px;
        position: relative;
    }
`;
