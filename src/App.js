import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Person from "./Person";
import Tetrahedron from "./Tetrahedron";
import Facet from "./Facet";
import ErrorPage from "./ErrorPage";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/person/:personId" render={
                ({ match }) => <Person id={match.params.personId}/>
            } />
            <Route path="/tet/:tetId" render={
                ({ match }) => <Tetrahedron id={match.params.tetId}/>
            } />
            <Route path="/facet/:facetName" render={
                ({ match }) => <Facet id={match.params.facetName}/>
            } />
            <Route component={ErrorPage} />
        </Switch>
    );
};

export default App;
