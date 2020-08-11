import React from 'react'
import{Route,BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/Home'
export default function Routes(){
    return(
        <Router>
            <Route component={Home} path='/' exact />
        </Router>
    )
}