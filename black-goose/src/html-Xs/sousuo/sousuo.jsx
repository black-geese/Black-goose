import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {getBaidu} from '../Api/request.js'
import {CHANGE_INPUT}from "../store/actionTypes/home"
import { connect } from 'react-redux';
export class Home extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    
    
    render() {
        const {onQingkong,onHandstoring,onHandChange,searchList,inputValue,historyList} = this.props
        return (
            <React.Fragment>
                {/* 头部 */}
                <div className='quan'>
                    <div className='tou-logo'>
                        <NavLink to='/Home'><p></p></NavLink>
                    </div>
                    <div className='sou'>
                        <input type="text" name='text' value={inputValue} onChange={onHandChange} placeholder='搜索知乎内容'/>
                    </div>
                    <div className='tou-qu'>
                        <NavLink to='/'>取消</NavLink>
                    </div>
                </div>
                {
                    // 三元
                    inputValue ? <ul className='ul'>
                        {
                            searchList && searchList.map((item,index)=>{
                                return <li onClick={()=>onHandstoring(index)} key={index}>{item}</li>
                            })
                        }
                    </ul>:<div>
                    <div className='sou-tu'></div>
                    <div className='sou-li'>
                        <div >
                            <p>搜索历史</p>
                            <button onClick={onQingkong}>清空</button>
                        </div>
                        <ul className='ul'>
                        {
                            historyList && <React.Fragment>{
                                historyList.map((item,index)=>{
                                    return <li key={index}>{item}</li>
                                })
                            }</React.Fragment>
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
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
    return {
        onQingkong(){
            dispatch({
                type:"qingKong"
            })
        },
        onHandChange({target}){
            dispatch({
                type:CHANGE_INPUT,
                value:target.value
            })
                getBaidu({wd:target.value}).then((data)=>{
                    if(data.s!==[]){
                        dispatch({
                            type:"pushSearchList",
                            value:data.s
                        })
                    }
                })
        },
        onHandstoring(index){
            dispatch({
                type:"pushhistory",
                index
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
