import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux.js';
import News from '../../components/News/News.js';

class WebediaBuilder extends Component{
    render () {
        return (
            <Aux>
                <News/>
            </Aux>
        )
    }
}

export default WebediaBuilder;