import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './index.scss'
import Home from './home'

export default class Html extends Component {
    render() {
        return (
            <div>
                    <Route path='/' exact component={Home}></Route>
            </div>
        )
    }
}
