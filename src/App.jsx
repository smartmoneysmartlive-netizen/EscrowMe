import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Africa Map Background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29.svg" 
            alt="Africa" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Trade. Pay. <span className="text-[#00D084]">Transact.</span> Across Africa
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Secure escrow service for 54 countries. Pay with confidence. 
              Get paid with guarantee.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-[#00D084] hover:bg-[#00B870] text-[#0A0F1E] font-bold px-8 py-4 rounded-lg">
                Create Account
              </button>
              <button className="border border-gray-600 hover:border-[#00D084] px-8 py-4 rounded-lg">
                How It Works
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img 
              src="/escrow-details.jpg" 
              alt="Vendor and Buyer using EscrowMe"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How EscrowMe Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="font-bold text-xl">Buyer Pays</h3>
              <p className="text-gray-400 mt-2">Money is held safely by EscrowMe</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="font-bold text-xl">Vendor Ships</h3>
              <p className="text-gray-400 mt-2">Goods sent with confidence</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="font-bold text-xl">Release Funds</h3>
              <p className="text-gray-400 mt-2">Money released when buyer confirms</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        © 2026 EscrowMe. Secure Transactions Across Africa.
      </footer>
    </div>
  );
}
