import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
// import Person from "./components/Person";
// import Tetrahedron from "./components/Tetrahedron";
// import Facet from "./components/Facet";
// import ErrorPage from "./components/ErrorPage";

const App = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
            {/* Add back "exact" before "path" */}
            {/* <Route path="/person/:personId" render={
                ({ match }) => <Person id={match.params.personId}/>
            } />
            <Route path="/tet/:tetId" render={
                ({ match }) => <Tetrahedron id={match.params.tetId}/>
            } />
            <Route path="/facet/:facetName" render={
                ({ match }) => <Facet id={match.params.facetName}/>
            } />
            <Route component={ErrorPage} /> */}
        </Switch>
    );
};

export default App;
