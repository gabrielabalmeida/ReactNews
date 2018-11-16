import React from 'react';

import classes from './Article.module.css';
import webediaLogo from "../../../assets/images/logo.png";

const article = (props) => (
        <article id="line1" className={classes.Article}>
                <a href={webediaLogo} target="_blank" rel="noopener noreferrer">
                    <div id="container-img"><img src={webediaLogo} alt=""/></div>
                    <p>teste</p>
                    <h3>teste2</h3>
                    <p>teste3</p>
                    <p>POR : ' +newsapi.articles[i].author+ '</p>
                </a>
        </article>
);

export default article;