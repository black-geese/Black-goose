import React, { Component } from 'react'
import Tou from '../../html-Xs/index'

export default class Xiangqing extends Component {
    render() {
        console.log(this.props)
        const { body } = this.props.data
        return (
            <div>
                <Tou />
                <p>详情页</p>
                <div style={{fontSize:'20px'}} dangerouslySetInnerHTML={{
                    __html: body
                }}>
                </div>
            </div>
        )
    }
}
