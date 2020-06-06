import React, { useState, useEffect } from "react";
import TopNavbar from "./layouts/navbar";
import { Container, Button } from "reactstrap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Router from "./routes/route";
import styled from "styled-components";
import Recruit from "./pages/recruit";
import Introduce from "./pages/introduce";
import Home from "./pages/home";

const StyledNavItem = styled.li`
  display: inline;
  background-color: #d5d8dc;
  border: 1px solid black;
  margin: 10px;
  padding: 3px;
`;

const StyledNavbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border: 1px solid black;
  padding: 5px;
`;

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <StyledNavItem>
          <Link to="/">
            <button>Home</button>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/recruit">
            <button>채용공고</button>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/introduce">
            <button>셀프구직</button>
          </Link>
        </StyledNavItem>
      </StyledNavbar>
    </>
  );
};

const RoutedContent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recruit" component={Recruit} />
        <Route exact path="/introduce" component={Introduce} />
      </Switch>
    </>
  );
};

export const App = (props) => {
  const [content, setContent] = useState(Home);
//   useEffect( () => {

//   })

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <hr />
        <div>
          <RoutedContent component={content}/>
        </div>
      </BrowserRouter>
    </>
  );
};
