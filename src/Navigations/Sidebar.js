import React, { useState } from "react";
import logo from "../images/logo.svg";

import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      {/* <nav className="navbar">
        <button className="burger_menu" onClick={ToggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        <div className="nav_container">
          <a className="navbar-brand text-primary mr-0" href="/">
            Company Logo
          </a>

          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </div>
      </nav> */}

      <nav className="navbar">
        <button className="burger_menu" onClick={ToggleSidebar}>
          <svg
            className="burger_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        <a href="/">
          <img alt="logo" className="logo" src={logo} />
        </a>

        <ul className="menus">
          {/* <li className="menu_links">
            <a href="/">Home</a>
          </li>
          <li className="menu_links">
            <a href="/">Link</a>
          </li>
          <li className="menu_links">
            <a href="/">Link</a>
          </li>
          <li className="menu_links">
            <a href="/">Link</a>
          </li> */}
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </nav>
      <aside className={`sidebar ${isOpen === true ? "active" : ""}`}>
        <div className="sd-header">
          <h4 className="mb-0">Sidebar Header</h4>
          <div className="btn btn-primary" onClick={ToggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
            </svg>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <a className="sd-link" href="/">
                Menu Item 1
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 2
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 3
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 4
              </a>
            </li>

            <li>
              <a className="sd-link" href="/">
                Menu Item 7
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 8
              </a>
            </li>

            {/* <DropdownButton1 /> */}
          </ul>
        </div>
      </aside>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </>
  );
};

export default ToggleSidebar;
