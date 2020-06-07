import React from "react";
import { StyledNavbar, StyledNavItem } from "./layoutStyle";
import {  Link } from "react-router-dom";

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
  )
}

export default Navbar
