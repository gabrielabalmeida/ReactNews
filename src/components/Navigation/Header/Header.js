import React from 'react';
import classes from './Header.module.css';
import Logo from '../../Logo/Logo.js';

const header = (props) => (
    <header className={classes.Header}>
        <div>MENU</div>
        <Logo/>
        <div>CAMPO DE BUSCA</div>
    </header>
);

export default header;