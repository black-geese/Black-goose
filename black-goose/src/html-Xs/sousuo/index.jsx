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
        }
    }
    onHandChange=({target})=>{
        this.setState({
            [target.name]:target.value
        })
        getBaidu({wd:target.value}).then((data)=>{
            console.log(data.s)
            this.setState({list:data.s})
        })
    }
    onHandstoring=({target})=>{
        let text=[]
        console.log(target)
        text.push(target)
        this.setState({
            lishi:text
        })
    }
    onQingkong=()=>{
        this.setState({
            lishi:[]
        })
    }
    render() {
        console.log(this.state.lishi)
        return (
            <React.Fragment>
                {/* 头部 */}
                <div className='quan'>
                    <div className='tou-logo'>
                        <NavLink to='/Home'><p></p></NavLink>
                    </div>
                    <div className='sou'>
                        <input type="text" name='text' value={this.state.text} onChange={this.onHandChange} placeholder='搜索知乎内容'/>
                    </div>
                    <div className='tou-qu'>
                        <NavLink to='/Home'>取消</NavLink>
                    </div>
                </div>
                {
                    // 三元
                    this.state.text ? <ul className='ul'>
                        {
                        this.state.list && this.state.list.map((item,index)=>{
                            return <li onClick={this.onHandstoring} key={index}>{item}</li>
                        })
                        }
                    </ul>:<div>
                    <div className='sou-tu'></div>
                    <div className='sou-li'>
                        <div >
                            <p>搜索历史</p>
                            <button onClick={this.onQingkong}>清空</button>
                        </div>
                        <ul className='ul'>
                        {
                            this.state.lishi ? <React.Fragment>{
                                this.state.lishi.map((item,index)=>{
                                    return <li key={index}>{item.innerText}</li>
                                })
                            }</React.Fragment>:''
                        }
                        {/* {
                            this.state.lishi.map((item,index)=>{
                                return <li key={index}>{item.innerText}</li>
                            })
                        } */}
                        </ul>
                    </div>
                    
                    </div>
                }
            </React.Fragment>
        )
    }
}
