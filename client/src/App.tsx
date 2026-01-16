import { useEffect, useRef, useState } from "react";

function App() {
  const [webSocket, setWebSocket] = useState<WebSocket>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(function () {
    const ws = new WebSocket("ws://localhost:8080");
    setWebSocket(ws);

    // ws client side event handlers
    /* ws.onerror = () => {};
    ws.onclose = () => {};
    ws.onopen = () => {}; */

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  function sendMessage() {
    if (!webSocket || !inputRef.current) return;
    webSocket.send(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" placeholder="Message" value="ping" ref={inputRef} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
