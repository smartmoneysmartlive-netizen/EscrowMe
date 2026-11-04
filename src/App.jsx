export default function App(){
 return (
  <div className="min-h-screen bg-[#0e1111] text-white">
    {/* NAV */}
    <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <b className="text-xl">EscrowMe</b>
      <div className="hidden md:flex gap-6 text-sm text-gray-300"><span>How it works</span><span>Payments</span><span>Contact</span></div>
      <button className="bg-[#c8ff57] text-black px-5 py-2 rounded-full text-sm font-bold">Fee Monet!</button>
    </nav>

    {/* HERO */}
    <div className="max-w-6xl mx-auto px-4 pt-10 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Trade. Pay. Transact.<br/>Across Africa</h1>
        <p className="text-gray-400 mt-4 text-sm">Secure payment and Escrow across Africa's most secure platform powering businesses securely across Africa.</p>
        <div className="flex gap-3 mt-6">
          <button className="bg-[#c8ff57] text-black px-6 py-3 rounded-full font-bold text-sm">Treate Account</button>
          <span className="bg-white/10 px-4 py-3 rounded-full text-sm">12.40+ Deals</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#1a2e1a] to-black rounded-[24px] h-[400px] flex items-center justify-center"> {/* replace with image later */}
        <p className="text-gray-500">Your phone image here</p>
      </div>
    </div>

    {/* HOW IT WORKS */}
    <div className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-4">
      <div className="bg-[#f5f5f0] text-black p-6 rounded-2xl">
        <h3 className="font-bold">How Escrow Works</h3>
        <p className="text-xs mt-2">N2.4B+ Secured currently to current, timely transfers secure, 10k+ daily transactions.</p>
        <p className="text-xs mt-2">N2.9B+ Escrow hits on the nearest trust with true determining power amount that protects business Africa.</p>
      </div>
      <div className="bg-[#c8ff57] text-black p-6 rounded-2xl">
        <h3 className="font-bold">How Escrow Works</h3>
        <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
          <div>Act* Gauge Customers</div><div>Fully Auditings</div><div>Across Global Cashless</div>
        </div>
      </div>
      <div className="bg-white text-black p-6 rounded-2xl"><h3 className="font-bold">Eurrow Focress</h3><div className="flex gap-2 mt-3 text-[10px]"><span className="bg-black text-white p-2 rounded">Add Money in Multiple Currencies</span><span className="bg-gray-200 p-2 rounded">Expand Into Currencies</span><span className="bg-gray-200 p-2 rounded">Currency Exchange</span></div></div>
      <div className="bg-[#111] border border-white/10 p-6 rounded-2xl"><h3 className="font-bold">Built for Efay Africa</h3><p className="text-xs text-gray-400 mt-2">Built to solve the issues of cross-border payment in Africa, making transactions seamless.</p></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 mt-4 grid md:grid-cols-2 gap-4">
      <div className="bg-white text-black p-6 rounded-2xl"><h3 className="font-bold">Currency Exchange</h3><p className="text-xs mt-2">Transact in local currencies from anywhere at one accessible channel.</p></div>
      <div className="bg-[#1a1a1a] p-6 rounded-2xl"><h3 className="font-bold">African Payments</h3><p className="text-xs text-gray-400 mt-2">Locked now makes the matter of cross border payments easy to handle, and payment to East, West, Central Africa.</p></div>
    </div>

    <div className="max-w-6xl mx-auto p-4 mt-10 text-center">
      <button className="bg-[#c8ff57] text-black w-full md:w-auto px-10 py-4 rounded-full font-bold">Create an Account</button>
      <p className="text-xs text-gray-500 mt-10">© 2026 EscrowMe — Best Escrow for African Businesses</p>
    </div>
  </div>
 )
}