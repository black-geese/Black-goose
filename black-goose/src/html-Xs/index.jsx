import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './index.scss'
import Home from './home'
import Sousuo from './sousuo'

export default class Html extends Component {
    render() {
        return (
            <React.Fragment>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/sousuo' component={Sousuo}></Route>
            </React.Fragment>
        )
    }
}
