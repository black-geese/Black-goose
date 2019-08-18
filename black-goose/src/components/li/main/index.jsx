import React, { Component } from 'react'
<<<<<<< HEAD
import { Route, NavLink } from 'react-router-dom'
=======
import { Route,NavLink } from 'react-router-dom'
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
import axios from 'axios'
import './index.scss'
import Header from '../header/index.jsx'
import Down from '../down/index.jsx'
export default class Main extends Component {
<<<<<<< HEAD
    constructor() {
        super()
        this.state = {
            zan: ''
        }
    }
    componentDidMount() {
=======
    constructor(){
        super()
        this.state = {}
    }
    componentDidMount(){
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
        axios.get('http://localhost:3003/zhihu').then(res => {
            this.setState(() => {
                return res.data
            })
        })
    }
    render() {
<<<<<<< HEAD
        const { top_stories } = this.state
        console.log(top_stories)
=======
        const { stories, top_stories } = this.state
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
        return (
            <div className='main-box'>
                <div className='main-center'>
                    <Route exact path='/home' component={Header} />
<<<<<<< HEAD
                    {/* {
=======
                    {
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
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
<<<<<<< HEAD
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
=======
                    }
                    {
                        top_stories && top_stories.map((item) => {
                            return <div onClick={() => this.getDitail(item.id)} key={item.id} style={{padding: '20px',marginBottom: '10px',backgroundColor: '#fff',borderBottom: '2px solid #E9E9E9'}}>
                                <NavLink to='/long' style={{fontSize: '16px'}}>{item.title}</NavLink>
                                <img style={{marginTop: '10px'}} width='200' src={item.image}/>
                                <div>
                                    <NavLink className='link' to='/down' style={{fontSize: '18px'}}>点赞</NavLink>
                                    <NavLink className='link' to='/comment' style={{fontSize: '18px'}}>评论</NavLink>
                                    <NavLink className='link' to='/down' style={{fontSize: '18px'}}>收藏</NavLink>
                                    <Route path='/down' component={Down}/>
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
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
<<<<<<< HEAD
        axios.get('http://localhost:3003/ditail', { params: { id } }).then(res => {
=======
        axios.get('http://localhost:3003/ditail', {params: {id}}).then(res => {
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
            this.setState(() => {
                return res.data
            })
        })
    }
}
