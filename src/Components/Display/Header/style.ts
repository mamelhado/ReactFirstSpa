import styled from "styled-components";

export const Container = styled.div`
    grid-area: HD;
    background-color: #2B2E33;
    border-bottom-color: #FFFFFF;
    border-bottom-width: 3px;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 5px;
    margin-left: 10px;
    color: #FFFFFF;

    > h2{
        color: white;
        margin-left: 7px;
    }

    > img{
        width: 130px;
        height: 50px;
    }
`;