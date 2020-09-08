import React, { useState, useEffect } from "react";
import "./App.css";
import greeterApi from "./util/greeterApi";

const App = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  function sayHello() {
    // unary call:
    greeterApi.sayHello(name, (err, response) => {
      setContent(response.getMessage());
    });
  }

  useEffect(() => {
    console.log("Start streaming");
    const [hello, name] = content.split(" ");
    // streaming call
    const stream = greeterApi.sayRepeatHello({ name, count: 5 });
    stream.on("data", (response) => {
      console.log(response.getMessage());
    });
    stream.on("error", (err) => {
      console.log(
        `Unexpected stream error: code = ${err.code}` +
        `, message = "${err.message}"`
      );
    });

    return () => {
      console.log("Stop streaming");
    };
  }, [content]);

  return (
    <div className="container">
      <div>
        <input
          className="input-name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="button-say-hello" onClick={sayHello}>
          Say Hello
        </button>
      </div>
      <h1 className="show-hello-content">{content}</h1>
    </div>
  );
};

export default App;
