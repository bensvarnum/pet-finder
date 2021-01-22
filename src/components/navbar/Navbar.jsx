import React, { useState } from "react";
import { Drawer } from "antd";
import LoginButton from '../authButtons/LoginButton';
import LogoutButton from '../authButtons/LogoutButton';
import "./navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="logo">
          <img
            className="logo-image"
            src="./img/pets-logo.png"
            alt="pet logo"
          />
        </div>
        <div className="nav-name">
          <a className="lost" href="/">
            Lost Pets
          </a>
          <img
            className="center-logo"
            src="./img/dog-bone-logo.png"
            alt="dog bone"
          />
          <a className="found" href="/">
            Found Pets
          </a>
        </div>
        <div className="login-button">
          <button className="fa fa-bars fa-2x" onClick={showDrawer}></button>
        </div>
      </div>
      <Drawer
        title="Navigation"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer-nav-links">
          <h3>Search Categories</h3>
          <div className="drawer-nav-link-group">
            <a className="lost" href="/">
              Lost Pets
            </a>
            <a className="found" href="/">
              Found Pets
            </a>
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
