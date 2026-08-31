import { useState, useEffect } from 'react'
import { api } from './api'
import { Wallet, Plus, ArrowRight, Shield, CheckCircle, Clock } from 'lucide-react'

function Dashboard({ user, transactions, onNewEscrow }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}</h1>
      
      <div className="bg-emerald-900 rounded-2xl p-6 mb-6">
        <p className="text-emerald-200 text-sm">Total Balance</p>
        <p className="text-3xl font-bold">₦{user?.balance?.toLocaleString()}</p>
      </div>

      <button onClick={onNewEscrow} className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 mb-6">
        <Plus size={20} /> New Escrow
      </button>

      <h2 className="text-lg font-bold mb-3">Recent Transactions</h2>
      {transactions.map(tx => (
        <div key={tx.id} className="bg-gray-900 p-4 rounded-xl mb-3 flex justify-between items-center">
          <div>
            <p className="font-semibold">{tx.title}</p>
            <p className="text-sm text-gray-400">₦{tx.amount?.toLocaleString()}</p>
          </div>
          <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full">{tx.status}</span>
        </div>
      ))}
    </div>
  )
}

function NewEscrow({ onBack, onCreate }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ title: '', amount: '', otherParty: '' })

  const handleCreate = () => {
    onCreate(form)
    onBack()
  }

  return (
    <div className="p-4">
      <button onClick={onBack} className="mb-4">← Back</button>
      <h1 className="text-2xl font-bold mb-6">New Escrow</h1>
      
      {step === 1 && (
        <div>
          <input placeholder="What are you buying/selling?" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="w-full p-3 mb-3 rounded bg-gray-900"/>
          <input placeholder="Amount ₦" type="number" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} className="w-full p-3 mb-3 rounded bg-gray-900"/>
          <input placeholder="Other person's email/phone" value={form.otherParty} onChange={e=>setForm({...form,otherParty:e.target.value})} className="w-full p-3 mb-6 rounded bg-gray-900"/>
          <button onClick={()=>setStep(2)} className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2">
            Continue <ArrowRight size={20}/>
          </button>
        </div>
      )}
      
      {step === 2 && (
        <div>
          <Shield className="mx-auto mb-4" size={48} color="#10b981"/>
          <p className="text-center mb-6">EscrowMe will hold ₦{Number(form.amount).toLocaleString()} safely until both parties agree.</p>
          <p className="text-sm text-gray-400 text-center mb-6">Fee: 1.5%</p>
          <button onClick={handleCreate} className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl">
            Fund Escrow
          </button>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('dashboard')
  const [user, setUser] = useState(null)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    api.getUser().then(res => setUser(res.data))
    api.getTransactions().then(res => setTransactions(res.data))
  }, [])

  const handleCreate = (form) => {
    api.createEscrow(form).then(() => {
      api.getTransactions().then(res => setTransactions(res.data))
      api.getUser().then(res => setUser(res.data))
    })

  }
