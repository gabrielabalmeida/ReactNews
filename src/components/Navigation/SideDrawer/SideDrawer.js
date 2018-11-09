import React from 'react';

import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => { 
    //...
    return (
        <div className={classes.SideDrawer}>
            <nav>
                <NavigationItems/>
            </nav>
            <span id="fechar-menu"><i class="fas fa-times"></i></span>
        </div>
        
    );
};

export default sideDrawer;