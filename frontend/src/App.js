import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
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
`

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border: 1px solid black;
  padding: 5px;
  margin: 0px;
  position: -webkit-sticky;
  top: 0;
`

const StyleFooter = styled.footer`
  margin: 0px;
  padding: 10px, 15%, 10px, 15%;
  background-color: #EBDEF0;
  bottom: 0;
`

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <ul>
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
        </ul>
      </StyledNavbar>
    </>
  );
};

const RoutedContent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recruit" component={Recruit} />
        <Route path="/introduce" component={Introduce} />
      </Switch>
    </>
  );
};

const Footer = () => {
  return (
    <StyleFooter>
      <div>
        <h1>This is Footer</h1>
      </div>
    </StyleFooter>
  )
}

export const App = (props) => {
  const [content, setContent] = useState(Home);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <RoutedContent component={content}/>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};
