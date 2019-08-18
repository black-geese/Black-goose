import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import axios from 'axios'
import './index.scss'
import Header from '../header/index.jsx'
import Down from '../down/index.jsx'
export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            zan: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3003/zhihu').then(res => {
            this.setState(() => {
                return res.data
            })
        })
    }
    render() {
        const { top_stories } = this.state
        console.log(top_stories)
        return (
            <div className='main-box'>
                <div className='main-center'>
                    <Route exact path='/home' component={Header} />
                    {/* {
                        stories && stories.map((item) => {
                            return <div key={item.id} style={{padding: '20px',marginBottom: '10px',backgroundColor: '#fff',borderBottom: '2px solid #E9E9E9'}}>
                                <NavLink to='/long' style={{fontSize: '18px'}}>{item.title}</NavLink>
                                {
                                    item.images.map((item, index) => {
                                        return <img style={{marginTop: '10px'}} key={index} src={item}/>
                                    })
                                }
                                <div>
                                    <NavLink className='link' to='/down' style={{fontSize: '18px'}}>点赞</NavLink>
                                    <NavLink className='link' to='/comment' style={{fontSize: '18px'}}>评论</NavLink>
                                    <NavLink className='link' to='/down' style={{fontSize: '18px'}}>收藏</NavLink>
                                    <Route path='/down' component={Down}/>
                                </div>
                            </div>
                        })
                    } */}
                    {
                        top_stories && top_stories.map((item) => {
                            return <div onClick={() => this.getDitail(item.id)} key={item.id} style={{ padding: '20px', marginBottom: '10px', backgroundColor: '#fff', borderBottom: '2px solid #E9E9E9' }}>
                                <NavLink to='/long' style={{ fontSize: '16px' }}>{item.title}</NavLink>
                                <img style={{ marginTop: '10px' }} alt='tu' src={item.image} />
                                <div>
                                    <span style={{ fontSize: '18px' }} >{this.state.zan}点赞</span>
                                    <NavLink className='link' to='/comment' style={{ fontSize: '18px' }}>评论</NavLink>
                                    <NavLink className='link' to='/down' style={{ fontSize: '18px' }}>收藏</NavLink>
                                    <Route path='/down' component={Down} />
                                </div>
                            </div>
                        })
                    }
                    <div>
                        <div dangerouslySetInnerHTML={{
                            __html: this.state.body
                        }}></div>
                    </div>
                </div>
            </div>
        )
    }
    getDitail = (id) => {
        console.log(id)
        axios.get('http://localhost:3003/ditail', { params: { id } }).then(res => {
            this.setState(() => {
                return res.data
            })
        })
    }
}
