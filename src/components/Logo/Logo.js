import React from 'react';
import classes from './Logo.module.css';

import webediaLogo from "../../assets/images/logo.png";

const logo = (props) => (
    <div className={classes.logo}>
        <a href="/">
            <img src={webediaLogo} alt="LogoWebedia"/>
        </a>
    </div>
);

export default logo;