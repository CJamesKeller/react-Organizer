import React from "react";
import logo from "./octahedron.png";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span className="App-greeting"><h1>octahedron</h1></span>
            </div>
            <div className="App-main">
                <div>
                    <p className="App-intro">
              To get started, begin adding notes or tasks to your facets.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
