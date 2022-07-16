import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!socket) {
      const newSocket = io("http://localhost:3001");
      console.log(newSocket);
      newSocket.emit("chat message", "Hello from React");
      newSocket.on("chat message", (msg) => {
        console.log(msg);
      });
      setSocket(newSocket);
    }
  }, [socket]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
