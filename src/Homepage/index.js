import React, { useState } from "react";

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
      <p>This is the homepage. </p>
    </div>
  );
};

export default Homepage;
