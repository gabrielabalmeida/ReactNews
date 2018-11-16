import React from 'react';

import classes from './Articles.module.css';
import webediaLogo from "../../assets/images/logo.png";

const articles = (props) => (
    <div className={classes.Articles}>
        <div className="row card-deck">    
            <div className="col">
                <article id="line1" className={classes.Article}>
                    <a href={webediaLogo} target="_blank" rel="noopener noreferrer">
                        <div id="container-img"><img src={webediaLogo} alt=""/></div>
                        <p>data</p>
                        <h3>{props.title}</h3>
                        <p>texto</p>
                        <p>POR : ' +newsapi.articles[i].author+ '</p>
                    </a>
                </article>
            </div>
        </div>
    </div>
);

export default articles;