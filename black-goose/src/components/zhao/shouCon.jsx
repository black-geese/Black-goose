import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class ShouCon extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        const { getDitail } = this.props
        const { top_stories } = this.props.data;
        console.log(top_stories)
        return (
            <div className='ce'>
                {
                    top_stories && top_stories.map(item => {
                        return (
                            <div onClick={() => getDitail(item.id)} key={item.id} className='item'>
                                <NavLink to='/xiangq'>
                                    <p>{item.title}</p>
                                    <div style={{ background: `url(${item.image}) no-repeat`, backgroundSize: "100% 100%" }}>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
