import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Down from './down/index.jsx'
import Main from './main/index.jsx'
import Long from './long/index.jsx'
import Comment from './comment/index.jsx'
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
        )
    }
}