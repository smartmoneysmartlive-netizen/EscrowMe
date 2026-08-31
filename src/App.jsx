import React from "react";

export default function App() {
  return (
    <div style={{ background: "#0A0A0A", color: "white", fontFamily: "Arial, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px 60px", alignItems: "center" }}>
        <h2 style={{ color: "#22C55E" }}>Escrow<span style={{ color: "white" }}>Me</span></h2>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          <span>About</span><span>Payments</span><span>Contact</span>
        </div>
        <button style={{ background: "#22C55E", border: "none", padding: "10px 20px", borderRadius: "20px", color: "black", fontWeight: "bold" }}>
          Fee Amount
        </button>
      </nav>

      {/* HERO SECTION */}
      <section style={{ padding: "80px 60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "48px", lineHeight: "1.2" }}>Trade. Pay. Transact.<br/>Across Africa</h1>
          <p style={{ opacity: 0.7, margin: "20px 0" }}>Secure payment and Escrow Across Africa. Secure peer to peer securely across Africa.</p>
          <button style={{ background: "#22C55E", border: "none", padding: "14px 28px", borderRadius: "8px", color: "black", fontWeight: "bold", fontSize: "16px" }}>
            Create Account
          </button>
          <div style={{ marginTop: "20px", padding: "10px 20px", border: "1px solid #444", borderRadius: "20px", display: "inline-block" }}>
            12,400+ Deals
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" 
          alt="person" 
          style={{ width: "400px", borderRadius: "20px" }}
        />
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "40px 60px" }}>
        <div style={{ background: "#1A1A1A", padding: "30px", borderRadius: "12px" }}>
          <h3>How Escrow Works</h3>
          <p>✓ N2.48B+ Secured safely to current. Instantly Transact across the 54 Nations.</p>
          <p>✓ N2.38B Escrow in on the safest trust with You depositing and we descent that amidst the business Africa.</p>
        </div>
      </section>

    </div>
  );
}
