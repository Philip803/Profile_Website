/* eslint react/forbid-prop-types: 0 */

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./Components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Philip Leung Profile Site </h1>
        </header>
        <p className="App-intro">
          Hello , I am Philip and i am a software developer
        </p>
        <Projects />
      </div>
    );
  }
}

export default App;
