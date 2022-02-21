import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { AuthPage } from '../components/authenticationpage/AuthPage';
import { HomePage } from '../components/homepage/HomePage';



export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/auth/:type" component={AuthPage} />
            </Switch>
        </div>
    </Router>
  )
}
