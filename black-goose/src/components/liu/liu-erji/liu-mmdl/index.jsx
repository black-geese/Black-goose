import React, { Component } from 'react'

//引入路由
import { NavLink } from 'react-router-dom'
import '../../liu-nav/index.scss'
//引入axios
import axios from 'axios'
import Liunav from '../../liu-nav'
export default class Mmdl extends Component {
    constructor(){
        super()
        this.state = {
            data: {
                user: "",
                yzm: "",
            }
        }
    }
    onHandleChange = ({ target }) => {
        this.setState({
            data: { ...this.state.data, [target.name]: target.value }
        })
    }
    onHandLogin = () => {
        axios.get('http://192.168.43.129:3003/').then(res => {
            const _res = res.data
            const _data = this.state.data
            console.log(_res)
            if (_res.user === _data.user && _res.yzm === _data.yzm) {
                alert("登录成功")
                window.location.replace('/li')
            } else if (this.state.data.user === '') {
                alert("手机号不能为空")
                return false;
            } else if (!(/^1[3456789]\d{9}$/.test(this.state.data.user))) {
                alert("手机号码有误，请重填");
                return false;
            } else if(this.state.data.yzm === ''){
                alert('验证码输入有误')
            }
            
        }).catch(err => {
            alert("网络错误,数据获取失败")
        })
    }
    render() {
        const { user, yzm } = this.state.data
        return (
            <div>
                <Liunav/>
                <div className='liu-cen'>
                        <ul>
                            <li>
                                <p className='liu-left'>+ 86</p>
                                <p className='liu-right'>
                                    <input type="text" placeholder='请输入手机号' name="user"
                                    value={user}
                                    onChange={this.onHandleChange}/>
                                </p>
                            </li>
                            <li>
                                <p className='liu-lefts'>
                                    <input type="text" placeholder='输入6位验证码' name="yzm"
                                    value={yzm}
                                    onChange={this.onHandleChange}/>
                                </p>
                                <p className='liu-rights'>发送验证码</p>
                            </li>
                        </ul>
                    </div>
                    <div className='liu-cen-bom'>
                    <p className='liu-cen-top'>未注册手机验证后自动登录</p>
                    <p className='liu-cen-bottom'>注册即同意《知乎协议》《隐私保护指引》</p>
                </div>
                <div className='liu-btn'>
                    <div className='liu-btn-dl' onClick={this.onHandLogin}>登录</div>
                </div>
                <div className='liu-footer'>
                    <NavLink to='/mmdls' className='liu-footer-left'>密码登录</NavLink>
                    <div className='liu-footer-right'>需要帮助</div>
                </div>
            </div>
        )
    }
}
