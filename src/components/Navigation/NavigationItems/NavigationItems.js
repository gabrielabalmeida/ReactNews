import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>NOTÍCIAS EM DESTAQUE</NavigationItem>
        <hr/>
        <NavigationItem link="/">NOTÍCIAS DO BRASIL</NavigationItem>
        <hr/>
        <NavigationItem link="/">NOTÍCIAS DO EUA</NavigationItem>
        <hr/>
        <NavigationItem link="/">NOTÍCIAS DA ARGENTINA</NavigationItem>
        <hr/>
        <NavigationItem link="/">NOTÍCIAS DA FRANÇA</NavigationItem>
    </ul>
);

export default navigationItems;