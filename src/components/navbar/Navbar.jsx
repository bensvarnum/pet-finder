import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import './navbar.css';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    return (
        <>
        <div className="navbar" id="navbar">
            <div className="logo">
                <img className="logo-image" src="./img/pets-logo.png" />
            </div>
            <div className="nav-name">
                <a className="lost" href="#">Lost Pets</a>
                <img className="center-logo" onClick={showDrawer} src="./img/dog-bone-logo.png" />
                <a className="found" href="#">Found Pets</a>
            </div>
            <div className="login-button">
                <button className="fa fa-bars" onClick={showDrawer}>
                </button>
            </div>
        </div>
        <Drawer
            title="Login"
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
            enableDragHandle
        >
            <div className="login-btn-group">
                <ul>
                    <li><Button type="primary">Facebook</Button></li>
                    <li><Button type="primary">Google</Button></li>
                </ul>
            </div>
        </Drawer>
        </>
    )
}

export default Navbar;