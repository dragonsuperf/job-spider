import React from "react";
import styled from "styled-components";
// import { Container, ContentArea } from "../styles/pageStyle";
import { StyleContainer }  from '../components/containers/container'

const H1 = styled.h1`
    color: black;
`

const Home = (props) => {
  return (
    <StyleContainer>
        <H1>This is Home</H1>
    </StyleContainer>
  );
};

export default Home;
