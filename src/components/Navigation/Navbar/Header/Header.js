import React from 'react';

import classes from './Header.module.css';
import Search from './Search/Search.js'
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';
import webediaLogo from "../../../../assets/images/logo.png";
import Toolbar from "../Header/Toolbar/Toolbar.js";

const header = (props) => (
                <header className={classes.Header}>
                <DrawerToggle clicked={props.drawerToggleClicked} />
                <a href="/">
                    <img src={webediaLogo} alt="LogoWebedia"/>
                </a>
                <Search/>
                <Toolbar/>
            </header>
);  

export default header;