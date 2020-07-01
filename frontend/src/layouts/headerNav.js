import React from "react";
import { Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <header className="header_nav">
      <div className="nav_title">
        <img className="site_logo" src="/images/site/temp_logo.png" />
      </div>
      <nav className="nav_center">
        <ul className="nav_menus">
          <li className="menu_item">
            <Link to="/" className="menu_item__link">
              채용 공고
            </Link>
          </li>
          <li className="menu_item">
            <Link to="company" className="menu_item__link">
              회사 목록
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="mobile_nav">
        <div className="hidden_title">
          <img
            className="mobile_logo"
            src="/images/site/temp_mobile_logo.png"
          />
        </div>
        <div className="mobile_menu">
          <img className="mobile_menu__icon" src="/images/menus/burger.png" />
        </div>
      </nav>
    </header>
  );
};
