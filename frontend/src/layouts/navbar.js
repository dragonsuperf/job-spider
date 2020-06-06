import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Router from "../routes/route";

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Job Spider</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto info" navbar fill>
            <Router>
              <Link to="/recruit">채용공고</Link>
              <Link to="/introduce">셀프구직</Link>
            </Router>
            
            {/* <NavItem href="/recruit">
              <NavLink color={"primary"}>채용공고</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/introduce">셀프구직</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>받은제안</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/dragonsuperf/job-spider">
                GitHub
              </NavLink>
            </NavItem> */}
          </Nav>
          <NavbarText>안녕하세요 반갑습니다.</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;