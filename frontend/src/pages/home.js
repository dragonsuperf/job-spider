import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: black;
  font-size: 50px;
`;

const TableRow = styled.div`
  background: #d6dbdf;
  height: 100px;
  width: 200px;
  margin: 10px;
`;

const Row = () => {
  return (
    <li>
      <TableRow>
        <p>Table Row</p>
      </TableRow>
    </li>
  );
};

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
      </ul>
    </div>
  );
};

export default Home;
