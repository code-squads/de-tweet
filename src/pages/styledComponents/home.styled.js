import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 55px);
    display: flex;
    flex-direction: row;
    background-color: yellow;
`

export const LeftContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: red;
    padding: 40px 15px 25px 30px;
`

export const MiddleContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: purple;
    padding: 40px 15px 25px 15px;
`

export const RightContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: green;
    padding: 40px 30px 25px 15px;
`



