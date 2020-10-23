import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Survey from "./Surveys";

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
