import React, { useState } from "react";

const DEBUG = process.env.NODE_ENV === "development" ? true : false;

const PREFIX = DEBUG ? "http://0.0.0.0:8000" : "";

const api_call = PREFIX + "/api/hello";

const Homepage = () => {
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
      console.log("hello");
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
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
        ></input>
        <button onClick={sendRequest}>Submit</button>
      </form>
      <p>I am getting back......, {backendData}</p>
    </div>
  );
};

export default Homepage;
