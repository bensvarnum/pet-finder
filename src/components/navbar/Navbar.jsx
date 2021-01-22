import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Landing, FoundOnly, LostOnly } from "../../pages";
import { Drawer, Button } from "antd";
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
    <Router>
      <div className="navbar" id="navbar">
        <div className="logo">
          <Link to="/">
            <img
              className="logo-image"
              src="./img/pets-logo.png"
              alt="pet logo"
            />
          </Link>
        </div>
        <div className="nav-name">
          <Link to="/foundonly">Found Pets</Link>
          <img
            className="center-logo"
            src="./img/dog-bone-logo.png"
            alt="dog bone"
          />
          <Link to="lostonly">Lost Pets</Link>
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
          </div>
        </div>
        <div className="drawer-login-btn-group">
          <h3>Login</h3>
          <ul>
            <li>
              <Button type="primary">Facebook</Button>
            </li>
            <li>
              <Button type="primary">Google</Button>
            </li>
          </ul>
        </div>
      </Drawer>

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/foundonly">
          <FoundOnly />
        </Route>
        <Route path="/lostonly">
          <LostOnly />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
