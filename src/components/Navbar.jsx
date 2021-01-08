import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <img className="logo-image" src="" />
                </div>
                <div className="nav-name">
                    <h1>Pet-Finder</h1>
                </div>
                <div className="link-group">
                    <ul className="links">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Lost Pets</a></li>
                        <li><a href="#">Found Pets</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;