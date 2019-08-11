import React, { Component } from 'react'

//引入路由
import { NavLink } from 'react-router-dom'

//引入axios
import axios from 'axios'

export default class Mmdl extends Component {
    constructor(){
        super()
        this.state = {
            Register: {
                user: "",
                password: "",
            }
        }
    }
    onRegister = () => {
        axios.get('http://localhost:3003/').then(res => {
            const _res = res.data
            const _data = this.state
            if (this.state.Register.user === '') {
                alert("手机号不能为空")
                return false;
            }else if (this.state.Register.password === "") {
                alert("密码不能为空")
                return false;
            } else   if (!(/^1[3456789]\d{9}$/.test(this.state.Register.user))) {
                alert("手机号码有误，请重填");
                return false;
            }else if (_res.user === _data.Register.user && _res.password === _data.Register.password) {
                alert("登录成功")
            } 
        }).catch(err => {
               alert('网络错误,数据获取失败')
        })
    }
    onHandleChange = ({ target }) => {
        this.setState({
            Register: { ...this.state.Register, [target.name]: target.value }
        })
    }
    render() {
        const { user, password } = this.state.Register
        return (
            <div>
                <div className='liu-cen'>
                        <ul>
                            <li>
                                <p className='liu-right'>
                                    <input type="text" placeholder='请输入手机号或邮箱' name="user"
                                value={user}
                                onChange={this.onHandleChange}/>
                                </p>
                            </li>
                            <li>
                                <p className='liu-lefts'>
                                    <input type="text" placeholder='请输入密码' name="password"
                                value={password}
                                onChange={this.onHandleChange}/>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='liu-cen-bom'>
                        <p className='liu-cen-top'>未注册手机验证后自动登录</p>
                        <p className='liu-cen-bottom'>注册即同意《知乎协议》《隐私保护指引》</p>
                </div>
                <div className='liu-btn'>
                    <div className='liu-btn-dl' onClick={this.onRegister}>登录</div>
                </div>
                <div className='liu-footer'>
                    <NavLink to='/mmdl' className='liu-footer-left'>免密登录</NavLink>
                    <NavLink to='/hwdl' className='liu-footer-left'>海外登录</NavLink>
                    <div className='liu-footer-right'>需要帮助</div>
                </div>
            </div>
        )
    }
}
