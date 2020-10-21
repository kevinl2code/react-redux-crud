import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Main'
import Edit from './Edit'

const App = () => {

    return(
        <div className="ui container">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/edit" component={Edit}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}



export default connect(null)(App)