import React, {Component} from 'react';    
import axios from 'axios';

import Articles from '../Articles/Articles.js';

class News extends Component {
    news(news) {
        this.state.news.map(news => {
            return <Articles/>
        });  
    } 
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=21759c25b49b42ac9f2294e4e3b597d6')
            .then(
                response => {
                    this.setState({news: response.data});
                    //console.log(response);
                }
            );
    }
    render(){
        return (
                <section className="News">
                    {news}
                </section>
        )
    }
}

export default News;