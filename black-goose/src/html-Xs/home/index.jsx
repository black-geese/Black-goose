import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
                <div className='quan'>
                            <div className='tou-logo'>
                                <NavLink to='/'></NavLink>
                            </div>
                            <div className='tou-tu'>
                                <NavLink to='/Sousuo'></NavLink>
                            </div>
                            <div className='tou-zi'>
                                <NavLink to='/Zuce'>登录或注册</NavLink>
                            </div>
                        
                    </div>
        )
    }
}
