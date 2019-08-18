import React, { Component } from 'react'
import './index.scss'
export default class Down extends Component {
    render() {
        return (
            <div className='down-box'>
                <div className='down-header'>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&
                            size=b9999_10000&sec=1566150216396&di=bd91668d25cb
                            251cf3de1227d2ec209a&imgtype=0&src=http%3A%2F%2Fimg.
                            chinapp.com%2Fuploadfile%2FArticles%2F2018-03-03%2F1
                            5200614189666.jpeg" className='logo'/>
                    <div className='top'>
                        <p>有问题，上知乎</p>
                        <p>可信赖的问答社区</p>
                    </div>
                    <button className='btn-down'>下载 App</button>
                </div>
                <div className='footer'></div>
            </div>
        )
    }
}
