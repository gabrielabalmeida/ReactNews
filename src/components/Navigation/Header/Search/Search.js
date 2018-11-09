import React from 'react';

import classes from './Search.module.css';

const search = () => (
    <form className={classes.Search}>
        <input type="text" autofocus/>
        <span><i class="fas fa-search"></i></span>
    </form>
);

export default search;