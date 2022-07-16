import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";

function App() {
  const socket = useRef(io("http://localhost:3001"));

  useEffect(() => {
    console.log(socket.current);
    socket.current.on("chat message", (msg) => {
      console.log(msg);
    });

    socket.current.on("poke", (msg) => {
      console.log(msg);
    });
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          if (socket) socket.current.emit("poke");
        }}
      >
        Poke everybody!
      </button>
    </div>
  );
}

export default App;
