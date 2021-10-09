import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    border: 2px solid blue;
    width: 400px;
    height: 200px;

    li{
        display: flex;
        flex-direction: column;
        border: 2px solid red;
        margin: 20px;
    }
`;