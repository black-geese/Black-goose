import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
export default class Xiangq extends Component {

    render() {
        const { getDitail, } = this.props
        const { top_stories } = this.props.data;
        return (
            <div>
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
            </div>
        );
    }

}
