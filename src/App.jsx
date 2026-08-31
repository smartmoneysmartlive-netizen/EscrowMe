import React from "react";

export default function App() {
  return (
    <div style={{ 
      backgroundColor: "#0A0A0A", 
      color: "white", 
      fontFamily: "'Segoe UI', Arial, sans-serif",
      minHeight: "100vh",
      position: "relative"
    }}>
      
      {/* AFRICA MAP BACKGROUND - FADED */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/7/7c/Africa_%28orthographic_projection%29.svg)",
        backgroundSize: "600px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right -100px center",
        opacity: "0.06",
        zIndex: "0"
      }}></div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: "1" }}>

        {/* NAVBAR */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ color: "#22C55E", fontSize: "24px", margin: 0, fontWeight: "800" }}>Escrow<span style={{ color: "white" }}>Me</span></h2>
          <div style={{ display: "flex", gap: "32px", fontSize: "15px", fontWeight: "500" }}>
            <span style={{ cursor: "pointer" }}>About</span>
            <span style={{ cursor: "pointer" }}>Payments</span>
            <span style={{ cursor: "pointer" }}>Contact</span>
          </div>
          <button style={{ background: "#22C55E", border: "none", padding: "12px 24px", borderRadius: "8px", color: "#0A0A0A", fontWeight: "700", fontSize: "15px", cursor: "pointer" }}>
            Fee Calculator
          </button>
        </nav>

        {/* HERO */}
        <section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "100px 80px", maxWidth: "1200px", margin: "0 auto", gap: "60px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "400px" }}>
            <h1 style={{ fontSize: "56px", lineHeight: "1.1", margin: "0 0 20px 0", fontWeight: "800" }}>Trade. Pay. Transact.<br/>Across Africa</h1>
            <p style={{ fontSize: "18px", opacity: "0.8", margin: "0 0 32px 0", lineHeight: "1.6" }}>Secure payment and Escrow across Africa. Trade peer to peer safely across 54 countries.</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button style={{ background: "#22C55E", border: "none", padding: "16px 32px", borderRadius: "10px", color: "#0A0A0A", fontWeight: "700", fontSize: "16px", cursor: "pointer" }}>
                Create Account
              </button>
              <div style={{ padding: "16px 24px", border: "1px solid #333", borderRadius: "10px", fontSize: "15px", fontWeight: "600" }}>
                12,400+ Deals Secured
              </div>
            </div>
          </div>
          
          {/* AFRICAN MAN + WOMAN ON PHONES */}
          <div style={{ flex: "1", minWidth: "400px" }}>
            <img 
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2069&auto=format&fit=crop" 
              alt="African man and woman doing business on phones" 
              style={{ width: "100%", borderRadius: "16px", objectFit: "cover", height: "500px", border: "2px solid #22C55E" }}
            />
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: "0 80px 100px 80px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ background: "#121212", padding: "40px", borderRadius: "16px", border: "1px solid #22C55E" }}>
            <h3 style={{ margin: "0 0 20px 0", color: "#22C55E", fontSize: "22px" }}>Trusted Across Africa</h3>
            <p style={{ margin: "10px 0", fontSize: "16px" }}>✓ ₦2.48B+ Secured safely to date</p>
            <p style={{ margin: "10px 0", fontSize: "16px" }}>✓ ₦2.38B currently in Escrow</p>
          </div>
        </section>

      </div>
    </div>
  );
}
