<<<<<<< HEAD
import React, { Component } from 'react';
import Home from './sousuo.jsx';
import { Provider } from 'react-redux';
import store from '../store'

export class Html extends Component {
    constructor(props) {
        super(props)
        this.state = {

=======
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {getBaidu} from '../Api/request.js'
export default class Sousuo extends Component {
    constructor(){
        super()
        this.state={
            text:'',
            list:[],
            lishi:[]
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
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
