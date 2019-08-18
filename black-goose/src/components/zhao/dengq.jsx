import React, { Component } from 'react'
import { NavLink,Switch } from 'react-router-dom'
import axios from "axios";
import './index.scss'
// import Xianq from './xianq';
import Tou from '../../html-Xs/index'
// import Xiangqing from './xiangqing';
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
        const { getDitail, } = this.props
        const { top_stories } = this.state.data;
        return (
            // 登录前首页
            <div>
                    <Tou />
                    <div className='daoh'>
                        {
                            this.state.daoh.map((item) => {
                                return <div key={item.id}>
                                    <NavLink activeClassName='aaa' to={item.url}>{item.name}</NavLink>
                                </div>
                            })
                        }
                    </div>
                {
                    top_stories && top_stories.map(item => {
                        return (
                            <div onClick={() => getDitail(item.id)} key={item.id} className='item'>
                                <NavLink to='/xiangq'>
                                    <p>{item.title}</p>
                                    <div style={{ background: `url(${item.image}) no-repeat` , backgroundSize: "100% 100%" }}>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })
                }

                    <main>
                        <Switch>
                            {/* <Route path='/' exact component={(props) => {
                                return <Xianq getDitail={this.getDitail} data={this.state.data} />
                            }} /> */}
                            {/* <Route path='/' exact component={(props) => {
                                return <Xianq getDitail={this.getDitail} data={this.state.data} />
                            }} /> */}
                            {/* <Route path='/xiangq' component={(props) => {
                                return <Xiangqing data={this.state.data} />
                            } }/> */}
                        </Switch>
                    </main>
            </div>

        )
    }
}
