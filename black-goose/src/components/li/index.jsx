import React, { Component } from 'react'
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom'
=======
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3

import Down from './down/index.jsx'
import Main from './main/index.jsx'
import Long from './long/index.jsx'
import Comment from './comment/index.jsx'
<<<<<<< HEAD
import Tou from '../../html-Xs'
export default class Li extends Component {
    render() {
        return (
            <div>
                <Tou></Tou>
                <Switch>
                    <Route path='/down' component={Down} />
                    <Route path='/' component={Main} />
                    <Route path='/long' component={Long} />
                    <Route path='/comment' component={Comment} />
                    {/* <Redirect to='/hom'/> */}
                </Switch>
            </div>
=======
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
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
        )
    }
}