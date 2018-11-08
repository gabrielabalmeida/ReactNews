import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';
import Header from '../Navigation/Header/Header.js';

const layout = (props) => (
    <Aux>
        <Header/>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;