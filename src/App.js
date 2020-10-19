import React, { useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState("");

  async function sendRequest(e) {
    e.preventDefault();
    try {
      const response = await fetch("/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setBackendData(data);
      console.log(backendData);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="App">
      <form>
        <input type="text"></input>
        <button onClick={sendRequest}>Submit</button>
      </form>
      <p>I got back, {backendData}</p>
    </div>
  );
}

export default App;
