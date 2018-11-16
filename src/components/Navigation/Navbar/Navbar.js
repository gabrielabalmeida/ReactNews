import React from 'react';
import classes from './Navbar.module.css';
import Toolbar from './Header/Toolbar/Toolbar.js';
import Header from './Header/Header.js';


const navbar = () => (
    <div id="app-header" >
        <header className={classes.Navbar}>
            <Header/>
            <Toolbar/>
        </header>
    </div>
);  

export default navbar;