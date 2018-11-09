import React from 'react';
import classes from './Header.module.css';
import Logo from '../../Logo/Logo.js';
import Search from './Search/Search.js'

const header = (props) => (
    <header className={classes.Header}>
        <div><i class="fas fa-bars"></i></div>
        <Logo />
        <Search />
        
    </header>
);

export default header;