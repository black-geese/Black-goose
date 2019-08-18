/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './header.scss'
import {falseLoginAction} from '../../../store/actionCreators/login'
class headers extends Component {
    constructor(props) {
        super()
        this.state = {
            isShows: false
        }
    }
    render() {
        return (
            <header className="header-box ">
                <div className='header-top flex flex-ju'>
                    <NavLink to='/home' className="hed-top">知乎</NavLink>
                    <NavLink className="sou-put" to='/weibo'>
                        🔍 搜索
                    </NavLink>
                    {this.props.statu ? <div>
                        <div className="cai-box" onClick={() => this.setState({
                            isShows: !this.state.isShows
                        })}>=</div>
                        {this.state.isShows && <ul className='cai-cont'>
                            <li onClick={() => this.setState({
                                isShows: !this.state.isShows
                            })}>
                                <NavLink to='/home' >♀ 首页</NavLink>
                            </li>
                            <li onClick={() => this.setState({
                                isShows: !this.state.isShows
                            })}>
                                <NavLink to='/card' >♀ 我的主页</NavLink>
                            </li>
                            <li onClick={() => {
                                this.props.isShow()
                                this.setState({
                                    isShows: !this.state.isShows
                                })
                            }}>
                                <NavLink to='/login' >♀ 退出登录</NavLink>
                            </li>
                        </ul>}


                    </div> : <NavLink to='/login' className="size-box">
                            注册或者登陆
                    </NavLink>}

                </div>
            </header>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        isShow(){
            dispatch(falseLoginAction())
        }
    }
}
export default connect(state => state, mapDispatchToProps)(headers)