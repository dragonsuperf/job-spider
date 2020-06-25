import React from 'react';
import { Link } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='headerNav'>
            <div className="nav_title">
                <img className="site_logo" 
                    src="/images/site/main_logo.png" 
                    width="50rem" 
                    height="50rem"/>
                <h1 className="site_title">Job-Spider</h1>
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
                    <li className="menu_item">
                        <Link to="offer" className="menu_item__link">
                            받은 제안
                        </Link>
                    </li>
                    <li className="menu_item">
                        <Link to="application" className="menu_item__link">
                            지원 현황
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="nav_user">
                <ul className="nav_links">
                    <li className="nav_link">
                        <Link className="nav_link__href" to="resume">
                            <i className="nav_icon fas fa-file-alt" title="이력서"></i>
                        </Link>
                        {/* 툴팁 */}
                        <p className="icon_tooltip">이력서</p>
                    </li>
                    <li className="nav_link">
                        <i className="nav_icon fas fa-bell" title="알림"></i>
                        {/* 툴팁 */}
                        <p className="icon_tooltip">알림</p>
                    </li>
                    <li className="nav_link">
                        <i className="nav_icon fas fa-id-badge" title="마이페이지"></i>
                        {/* 툴팁 */}
                        <p className="icon_tooltip">마이페이지</p>
                    </li>
                    
                </ul>
            </div>
            <img className="mobile_menu__icon" src="/images/menus/burger.png">

            </img>
        </header>
    )
}