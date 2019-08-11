import React, { Component } from 'react'

//引人组件
import Nav from './liu-nav'

//引入路由
import { BrowserRouter } from 'react-router-dom'

export default class Liu extends Component {
    render() {
        return (
            <BrowserRouter>
                
                {/* 首页 */}
                <Nav/>
                
            </BrowserRouter>
        )
    }
}
