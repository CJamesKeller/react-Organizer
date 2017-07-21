import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "Home";
import Person from "Person";
import Tetrahedron from "Tetrahedron";
import ErrorPage from "ErrorPage";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/person/:personId" render={ ({ match }) => <Person id={match.params.personId}/> } />
            <Route path="/tetrahedron/:tetId" render={ ({ match }) => <Tetrahedron id={match.params.tetId}/> } />
            <Route component={ErrorPage} />
        </Switch>
    );
};

export default App;
