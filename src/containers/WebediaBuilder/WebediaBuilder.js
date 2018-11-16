import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux.js';
import Articles from '../../components/Articles/Articles.js';

class WebediaBuilder extends Component{
    render () {
        return (
            <Aux>
                <Articles/>
            </Aux>
        )
    }
}

export default WebediaBuilder;