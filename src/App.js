import React from 'react';
import logo from './octahedron.png';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-main">
          <h2>Welcome to your octahedron</h2>
        </div>
        <div>
          <p className="App-intro">
            To get started, begin adding notes or tasks to your facets.
          </p>
      </div>
      </div>
    );
}

export default App;
