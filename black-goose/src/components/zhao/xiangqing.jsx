import React, { Component } from 'react'
import Tou from '../../html-Xs/index'
import { Route } from 'react-router-dom'

export default class Xiangqing extends Component {
    render() {
        const { body } = this.props.data
        console.log(this.props)
        return (
            <div>
                <Route path='/' component={()=><Tou/>} />

                <p>详情页</p>
                <div style={{ fontSize: '20px' }} dangerouslySetInnerHTML={{
                    __html: body
                }}>
                </div>
            </div>
        )
    }
}
