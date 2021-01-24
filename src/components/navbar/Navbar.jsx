import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Landing, FoundOnly, LostOnly } from "../../pages";
import PdfForm from "../PDF/PdfForm";
import PetForm from "../form/PetForm";
import { Drawer, Button } from "antd";
import LoginButton from '../authButtons/LoginButton';
import LogoutButton from '../authButtons/LogoutButton';
import MakeAPostButton from '../authButtons/MakeAPostButton';
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
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer-nav-links">
          <h3>Search Categories</h3>
          <div className="drawer-nav-link-group">
            <a className="home" href="/">
              Home  
            </a>
            <a className="lost" href="/lostonly">
              Lost Pets
            </a>
            <a className="found" href="/foundonly">
              Found Pets
            </a>
            <div className="auth-buttons">
              <Link to="/createpdf">
                <Button>
                  Create Poster
                </Button>
              </Link>
              <Link to="/petform">
                <MakeAPostButton />
              </Link>
              <LoginButton />
              <LogoutButton />
            </div>
          </div>
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
        <Route path="/createpdf">
          <PdfForm />
        </Route>
        <Route path="/petform">
          <PetForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
