import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './index.scss'
import Home from './home'
import Sousuo from './sousuo'
import Zuce from './zuce'

export default class Html extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/sousuo' component={Sousuo}></Route>
                    <Route path='/zuce' component={Zuce}></Route>
                </Router>
            </React.Fragment>
        )
    }
}
