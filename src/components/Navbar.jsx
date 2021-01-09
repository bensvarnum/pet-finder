import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <img className="logo-image" src="./img/pets-logo.png" />
                </div>
                <div className="nav-name">
                    <a className="lost" href="#">Lost Pets</a>
                    <img className="center-logo" src="./img/dog-bone-logo.png" />
                    <a className="found" href="#">Found Pets</a>
                </div>
                <div className="login-button">
                    <button className="ui button">Login</button>
                </div>
            </div>
        )
    }
}

export default Navbar;