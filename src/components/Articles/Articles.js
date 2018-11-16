import React from 'react';


import classes from './Articles.module.css';
import Article from './Article/Article.js';

const articles = () => (
    <section className={classes.Articles}>
        <div id='line1'>
            <Article/>
            <Article/>
        </div>
        <div id='line2'>
            <Article/>
            <Article/>
            <Article/>
        </div>
        <div id='line3'>
            <Article/>
            <Article/>
        </div>
    </section>
);

export default articles;