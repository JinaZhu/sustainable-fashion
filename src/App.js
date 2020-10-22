import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Survey from "./Surveys";

const DEBUG = process.env.NODE_ENV === "development" ? true : false;
const PREFIX = DEBUG ? "http://localhost:80" : "";
const api_call = PREFIX + "/hello";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/survey" component={Survey} />
      </div>
    </HashRouter>
  );

  // const [backendData, setBackendData] = useState("");
  // const [message, setMessage] = useState("");

  // async function sendRequest(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(api_call, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(message),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setBackendData(data);
  //     console.log(backendData);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  // return (
  //   <div className="App">
  //     <form>
  //       <input
  //         onChange={(e) => {
  //           setMessage(e.target.value);
  //         }}
  //         type="text"
  //       ></input>
  //       <button onClick={sendRequest}>Submit</button>
  //     </form>
  //     <p>I got back, {backendData}</p>
  //   </div>
  // );
}

export default App;
