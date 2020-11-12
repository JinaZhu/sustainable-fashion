import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Survey from "./Surveys";
import {ColorContext} from "./ColorContext"

const color2020 = {
  "hex": "#0f4c81",
  'colorName': "Classic Blue",
  'secondaryColor': "#f2f2f2",
  'year': '2020'
}

function App() {
  const [color, setColor] = useState(color2020)

  return (
    <HashRouter basename="/">
      <div className="App">
        <ColorContext.Provider value={{color, setColor}}>
          <Route exact path="/" component={Homepage} />
          <Route path="/survey" component={Survey} />
        </ColorContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
