import React from 'react';

import classes from './Search.module.css';

const search = () => (
    <form className={classes.Search}>
        <input type="text" autoFocus/>
        <span id='search'><i class="fas fa-search"></i></span>
    </form>
);

export default search;