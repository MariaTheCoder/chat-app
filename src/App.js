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

  return <div className="App"></div>;
}

export default App;
