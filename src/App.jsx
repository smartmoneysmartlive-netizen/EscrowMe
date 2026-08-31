import React from "react";

export default function App() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#0A1F0A", 
      color: "white", 
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "48px", margin: "0" }}>EscrowMe</h1>
      <p style={{ fontSize: "18px", margin: "16px 0 32px 0", opacity: 0.8 }}>
        Safe. Secure. Trusted Escrow for Nigeria.
      </p>
      <button style={{ 
        padding: "14px 32px", 
        fontSize: "16px", 
        background: "#22C55E", 
        color: "white", 
        border: "none", 
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        Create Escrow
      </button>
    </div>
  );
}
