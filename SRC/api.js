const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let mockDB = {
  user: { id: 1, name: "Ada", balance: 4280450 },
  transactions: [
    { id: 1, title: "Laptop Sale", amount: 350000, status: "funded", role: "buyer", step: 2 },
    { id: 2, title: "Web Design", amount: 120000, status: "completed", role: "seller", step: 4 },
  ]
};
export const api = {
  getUser: async () => { await delay(500); return { data: mockDB.user }; },
  getTransactions: async () => { await delay(600); return { data: mockDB.transactions }; },
  createEscrow: async (payload) => { await delay(800); const newTx = { id: Date.now(), ...payload, status: "pending", step: 0 }; mockDB.transactions.unshift(newTx); mockDB.user.balance -= Number(payload.amount) * 1.015; return { data: newTx }; },
  confirmDelivery: async (id) => { await delay(800); const tx = mockDB.transactions.find(t => t.id === id); tx.step = 4; tx.status = "completed"; mockDB.user.balance += Number(tx.amount) * 0.985; return { data: tx }; }
};
