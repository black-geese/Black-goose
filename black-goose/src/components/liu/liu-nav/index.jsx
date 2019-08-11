import React, { Component } from 'react'

//引入组件

//引入样式
import './index.scss'


export default class Nav extends Component {
    constructor(){
        super()
        this.state = {
            isToggleOn: true,
            display: 'block',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    //让顶部蓝框隐藏
    handleClick = () => {
        this.setState({
            isToggleOn:!this.state.isToggleOn,
            display: this.state.isToggleOn ? 'none': '',
        })
    }
    render() {
        return (
            <div className='liu-nav'>
                <div className='liu-header' style={{display:this.state.display}}>
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
