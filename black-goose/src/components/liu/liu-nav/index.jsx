import React, { Component } from 'react'

//引入组件

//引入样式
import './index.scss'


export default class Nav extends Component {
    constructor(){
        super()
    }
    //点击蓝框直接去未登录的首页
    handleClick = () => {
        window.location.replace('/')
    }
    render() {
        return (
            <div className='liu-nav'>
                <div className='liu-header'>
                    <div className='liu-cha' onClick={this.handleClick}>x</div>
                    <p className='liu-zh'>登录知乎</p>
                    <p className='liu-fx'>发现更多可信赖的解答</p>
                </div>
                <div>

                    {/* <Redirect from="/" to="/Mmdl" /> */}
                </div>
                <div className='liu-bottom'>
                    <p className='liu-bootom-top'>社交账号登录</p>
                    <p className='liu-bootom-bom'>注册机构账号</p>
                </div>
            </div>
        )
    }
}
