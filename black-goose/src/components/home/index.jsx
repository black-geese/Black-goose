import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// import Zhao from '../zhao';
// import Xu from '../xu';
import Liu from '../liu';
// import Li from '../li';
export default class Html extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* <Route to='/' exact component={Zhao} /> */}
                        {/* <Route to='/zhao' component={Zhao} /> */}
                        {/* <Route to='/xu' component={Xu} /> */}
                        <Route to='/liu' component={Liu} />
                        {/* <Route to='/li' component={Li} /> */}
                        {/* <Redirect from='/*' to='/' /> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
