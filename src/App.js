import React, { useState } from "react";
import "./App.css";

const DEBUG = 0;

const PREFIX = DEBUG ? "http://localhost:80" : "";

const api_call = PREFIX + "/hello";

function App() {
  const [backendData, setBackendData] = useState("");
  const [message, setMessage] = useState("");

  async function sendRequest(e) {
    e.preventDefault();
    try {
      const response = await fetch(api_call, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      const data = await response.json();
      console.log(data);
      setBackendData(data);
      console.log(backendData);
    } catch (error) {
      console.log("error", error);
    }
  }
  console.log(message);

  return (
    <div className="App">
      <form>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
        ></input>
        <button onClick={sendRequest}>Submit</button>
      </form>
      <p>I got back, {backendData}</p>
    </div>
  );
}

export default App;
