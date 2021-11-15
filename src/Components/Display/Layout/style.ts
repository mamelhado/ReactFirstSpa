import styled from "styled-components";

/*
* DisplayLayout
* HD = Header
* SB = Sidebar
* CT = Content
*/

export const DisplayLayout = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 60px auto;

    grid-template-areas: 
        "HD HD"
        "SB CT";
    
    height: 100vh;
`;