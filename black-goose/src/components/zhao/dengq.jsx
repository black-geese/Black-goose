import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import axios from "axios";
import './index.scss'
import Xianq from './xianq';
export default class Dengq extends Component {
    constructor() {
        super()
        this.state = {
            daoh: [
                { name: '推荐', url: '/tui', id: 0 },
                { name: '生活', url: '/sheng', id: 1 },
                { name: '教育', url: '/jiao', id: 2 },
                { name: '娱乐', url: '/yu', id: 3 },
                { name: '汽车', url: '/qi', id: 4 }
            ],
            data: ''
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3003/zhihu").then(res => {
            this.setState({
                data: res.data
            });
        })
    }
    getDitail = (id) => {
        axios.get('http://localhost:3003/ditail', { params: { id } }).then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        return (
            // 登录前首页
            <div>
                <BrowserRouter>

                    <div className='daoh'>
                        {
                            this.state.daoh.map((item) => {
                                return <div key={item.id}>
                                    <NavLink activeClassName='aaa' to={item.url}>{item.name}</NavLink>
                                </div>
                            })
                        }
                    </div>

                    <main>
                        <Switch>
                            <Route path='/' component={(props) => {
                                return <Xianq getDitail={this.getDitail} data={this.state.data} />
                            }} />
                            <Route path={`$match.url()/:id`} component={(props) => {
                                return <Xianq getDitail={this.getDitail} data={this.state.data} />
                            }} />
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>

        )
    }
}
