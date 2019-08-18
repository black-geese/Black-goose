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
import Sousuo from '../../html-Xs/sousuo/index';
import Li from '../li';
export default class Zhao extends Component {
    constructor(props) {
        super(props)
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
        axios.get("http://192.168.43.129:3003/zhihu").then(res => {
            this.setState({
                data: res.data
            });
        })
    }
    getDitail = (id) => {
        axios.get('http://192.168.43.129:3003/ditail', { params: { id } }).then(res => {
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
                    {/* <Redirect from='/' to='/shouye' /> */}

                    <main>
                        <Switch>
                            <Route path='/' exact component={() => {
                                return <Dengq getDitail={this.getDitail} />
                            }} />
<<<<<<< HEAD
                            <Route path='/xiangq' component={(props) => { return <Xiangqing data={this.state.data} /> }} />
                            <Route path='/sousuo' component={Sousuo} />
                            <Route path='/zuce' component={Zuce} />
                            <Route path='/mmdl' component={Mmdl} />
                            <Route path='/mmdls' component={Mmdls} />
                            <Route path='/hwdl' component={Hwdl} />
                            <Route path='/yxdl' component={Yxdl} />
                            <Route path='/li' component={Li} />
                            {/* <Route path='/:id' exact component={(props) => {
                                console.log(props)
                                switch (`${props.location.pathname}`) {
                                    case '/':
                                        return <Dengq getDitail={this.getDitail} />
                                    case '/xiangq':
                                        return <Xiangqing data={this.state.data} />
                                    case '/sousuo':
                                        return <Sousuo />
                                    case '/zuce':
                                        return <Zuce />
                                    case '/mmdl':
                                        return <Mmdl />
                                    case '/mmdls':
                                        return <Mmdls />
                                    case '/hwdl':
                                        return <Hwdl />
                                    case '/yxdl':
                                        return <Yxdl />
                                    default:
                                        break;
                                }
                            }} /> */}
=======
                            <Route path='/xiangq' component={(props) => {
                                return <Xiangqing data={this.state.data} />
                            }} />
                              {/* 登录组件 */}
                            <Route path='/zuce' component={Zuce}></Route>
                            <Route path="/mmdl" component={Mmdl} />
                            <Route path="/mmdls" component={Mmdls} />
                            <Route path="/hwdl" component={Hwdl} />
                            <Route path="/yxdl" component={Yxdl} />
>>>>>>> 249c657d896071c63c0f230363851753d7c2e8f3
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>

        )
    }
}
