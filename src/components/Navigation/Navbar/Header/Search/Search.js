import React from 'react';

import classes from './Search.module.css';

const search = () => (
    <form className={classes.Search} _ngcontent-c8="">
        <input type="text" autoFocus autoComplete="off"/>
        <span id='search'><i className="fas fa-search"></i></span>
    </form>
);

export default search;