import React from "react";

export default function App() {
  return (
    <div style={{ background: "#0A0A0A", color: "white", fontFamily: "Arial, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px 60px", alignItems: "center", flexWrap: "wrap" }}>
        <h2 style={{ color: "#22C55E", margin: 0 }}>Escrow<span style={{ color: "white" }}>Me</span></h2>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          <span>About</span><span>Payments</span><span>Contact</span>
        </div>
        <button style={{ background: "#22C55E", border: "none", padding: "10px 20px", borderRadius: "20px", color: "black", fontWeight: "bold", cursor: "pointer" }}>
          Fee Calculator
        </button>
      </nav>

      {/* HERO SECTION */}
      <section style={{ padding: "80px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}>
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "48px", lineHeight: "1.2", margin: 0 }}>Trade. Pay. Transact.<br/>Across Africa</h1>
          <p style={{ opacity: 0.7, margin: "20px 0" }}>Secure payment and Escrow across Africa. Trade peer to peer safely across 54 countries.</p>
          <button style={{ background: "#22C55E", border: "none", padding: "14px 28px", borderRadius: "8px", color: "black", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }}>
            Create Account
          </button>
          <div style={{ marginTop: "20px", padding: "10px 20px", border: "1px solid #444", borderRadius: "20px", display: "inline-block", marginLeft: "12px" }}>
            12,400+ Deals Secured
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
          alt="African person using phone" 
          style={{ width: "400px", maxWidth: "100%", borderRadius: "20px" }}
        />
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "40px 60px" }}>
        <div style={{ background: "#1A1A1A", padding: "30px", borderRadius: "12px" }}>
          <h3 style={{ marginTop: 0 }}>How Escrow Works</h3>
          <p>✓ ₦2.48B+ Secured safely to date. Instantly transact across the 54 African nations.</p>
          <p>✓ ₦2.38B in Escrow. We hold funds safely until both buyer and seller are satisfied.</p>
        </div>
      </section>

    </div>
  );
}
