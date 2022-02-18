import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { HomePage } from '../components/homepage/HomePage';



export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    </Router>
  )
}
