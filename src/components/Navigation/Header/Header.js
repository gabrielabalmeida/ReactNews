import React from 'react';
import classes from './Header.module.css';
import Logo from '../../Logo/Logo.js';
import Search from './Search/Search.js'
import Toolbar from '../../Navigation/Toolbar/Toolbar.js';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const header = (props) => (
    <header className={classes.Header}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo />
        <Search />
        <Toolbar/>
    </header>
);  

export default header;