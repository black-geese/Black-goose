import React, { Component } from 'react'

//引人组件
import Nav from './liu-nav'

//引入路由

export default class Liu extends Component {
    render() {
        return (
            <div>
                
                {/* 首页 */}
                <Nav/>
                
            </div>
        )
    }
}
