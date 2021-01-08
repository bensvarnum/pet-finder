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
                    <h1>Pet-Finder</h1>
                    <a href="#">Found Pets</a>
                </div>
                {/* <div className="login-button">
                </div> */}
                <button className="ui button">Login</button>

            </div>
        )
    }
}

export default Navbar;