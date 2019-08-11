import React, { Component } from 'react'

export default class Xiangqing extends Component {
    render() {
        console.log(this.props)
        const { body } = this.props.data
        return (
            <div>
                <p>详情页</p>
                <div dangerouslySetInnerHTML={{
                    __html: body
                }}>
                </div>
            </div>
        )
    }
}
