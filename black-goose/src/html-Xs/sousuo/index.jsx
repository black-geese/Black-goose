import React, { Component } from 'react';
import Home from './sousuo.jsx';
import { Provider } from 'react-redux';
import store from '../store'

export class Html extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Home></Home>
                </Provider>
            </div>
        )
    }
}

export default Html
