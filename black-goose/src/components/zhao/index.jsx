import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from "axios";
import './index.scss';
import Dengq from './dengq';
import Xiangqing from './xiangqing';
//登录组件
import Zuce from '../liu/liu-erji/liu-mmdl'
import Mmdls from '../liu/liu-erji/liu-mmdls'
import Mmdl from '../liu/liu-erji/liu-mmdl'
import Hwdl from '../liu/liu-erji/liu-hwdl'
import Yxdl from '../liu/liu-erji/liu-yxdl'
export default class Zhao extends Component {
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
                    <main>
                        <Switch>
                            <Route path='/' exact component={() => {
                                return <Dengq getDitail={this.getDitail} />
                            }} />
                            <Route path='/xiangq' component={(props) => {
                                return <Xiangqing data={this.state.data} />
                            }} />
                              {/* 登录组件 */}
                            <Route path='/zuce' component={Zuce}></Route>
                            <Route path="/mmdl" component={Mmdl} />
                            <Route path="/mmdls" component={Mmdls} />
                            <Route path="/hwdl" component={Hwdl} />
                            <Route path="/yxdl" component={Yxdl} />
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>

        )
    }
}
