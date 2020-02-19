import React from 'react';
import About from './About';
import { Switch, Route } from 'react-router-dom';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={About} />
    </Switch>
)

export default Routes;