import React, { useState } from "react";
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
  NavbarText
} from 'reactstrap';


const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Job Spider</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >채용공고</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >기업목록</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >받은제안</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/dragonsuperf/job-spider">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>안녕하세요</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
