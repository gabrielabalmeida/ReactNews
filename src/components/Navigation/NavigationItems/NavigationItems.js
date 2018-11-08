import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = () => (
    <ul className={classes.NavagationItems}>
        <NavigationItem link="/" active>NOTÍCIAS EM DESTAQUE</NavigationItem>
        <NavigationItem link="/">NOTÍCIAS DO BRASIL</NavigationItem>
    </ul>
);

export default navigationItems;