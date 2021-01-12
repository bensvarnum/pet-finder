import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';

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
                    <img className="center-logo" src="./img/dog-bone-logo.png" />
                    <a className="found" href="#">Found Pets</a>
                </div>
                <div className="login-button">
                    <button className="ui button" onClick={showDrawer}>Login</button>
                </div>
            </div>
            <Drawer
                title="Login"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <div className="login-btn-group">
                    <Button type="primary">Facebook</Button>
                    <Button type="primary">Google</Button>
                </div>
            </Drawer>
            </>
        )
}

export default Navbar;