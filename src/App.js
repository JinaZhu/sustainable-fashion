import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Survey from "./Surveys";

const DEBUG = process.env.NODE_ENV === "development" ? true : false;
const PREFIX = DEBUG ? "http://localhost:80" : "";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/survey" component={Survey} />
      </div>
    </HashRouter>
  );
}

export default App;
