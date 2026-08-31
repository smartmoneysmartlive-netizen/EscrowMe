import React, { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    setMessage("EscrowMe is Live!");
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>EscrowMe</h1>
      <p>{message}</p>
      <p>Your escrow platform is deploying successfully.</p>
    </div>
  );
}
