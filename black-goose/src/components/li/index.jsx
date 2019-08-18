import React, { Component } from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'

import Down from './down/index.jsx'
import Main from './main/index.jsx'
import Long from './long/index.jsx'
import Comment from './comment/index.jsx'
export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/down' component={Down} />
                    <Route path='/home' component={Main} />
                    <Route path='/long' component={Long}/>
                    <Route path='/comment' component={Comment}/>
                    <Redirect to='/home'/>
                </Switch>
            </BrowserRouter>
        )
    }
}