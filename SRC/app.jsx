import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Home, Wallet, Plus, Send, Settings, ArrowLeft, Check, Loader2 } from "lucide-react";
import { api } from "./api";

const queryClient = new QueryClient();

function Layout({ children }) {
  return (
    <div className="bg-[#0A1F0F] text-white min-h-screen font-sans">
      <nav className="sticky top-0 bg-[#122A16] p-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-[#84E10E]">EscrowMe</Link>
        <div className="flex gap-4">
          <Link to="/dashboard"><Home size={20} /></Link>
          <Link to="/wallet"><Wallet size={20} /></Link>
          <Link to="/settings"><Settings size={20} /></Link>
        </div>
      </nav>
      <div className="max-w-md mx-auto p-4 pb-20">{children}</div>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const { data: user, isLoading: userLoading } = useQuery({ queryKey: ['user'], queryFn: api.getUser });
  const { data: transactions, isLoading: txLoading } = useQuery({ queryKey: ['transactions'], queryFn: api.getTransactions });

  if (userLoading || txLoading) return <Loader2 className="animate-spin mx-auto mt-10" />;

  return (
    <div>
      <h2 className="text-xl text-[#A3B3A8]">Welcome back, {user.data.name}</h2>
      <div className="bg-[#122A16] rounded-2xl p-6 mt-4">
        <p className="text-[#A3B3A8]">Total Balance</p>
        <p className="text-3xl font-bold">₦{user.data.balance.toLocaleString()}</p>
        <button onClick={() => navigate('/wallet')} className="mt-3 bg-[#84E10E] text-black w-full py-2 rounded-lg font-semibold">
          Add Money
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button onClick={() => navigate('/escrow/new')} className="bg-[#122A16] p-4 rounded-xl flex-col items-center">
          <Plus className="text-[#84E10E]" /> <span className="mt-1">New Escrow</span>
        </button>
        <button className="bg-[#122A16] p-4 rounded-xl flex-col items-center">
          <Send className="text-[#84E10E]" /> <span className="mt-1">Send Money</span>
        </button>
      </div>

      <h3 className="mt-6 font-bold">Recent Deals</h3>
      {transactions.data.map(tx => (
        <Link to={`/escrow/${tx.id}`} key={tx.id} className="bg-[#122A16] p-4 rounded-xl mt-3 flex justify-between hover:bg-[#1a3a1f] transition">
          <div>
            <p className="font-semibold">{tx.title}</p>
            <p className="text-sm text-[#A3B3A8]">{tx.role === 'buyer' ? 'Buying' : 'Selling'}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">₦{tx.amount.toLocaleString()}</p>
            <span className={`text-xs px-2 py-1 rounded ${tx.status === 'completed' ? 'bg-green-900' : 'bg-yellow-900'}`}>
              {tx.status}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function NewEscrow() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ title: '', buyer: '', amount: '', terms: '', role: 'buyer' });
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({ 
    mutationFn: api.createEscrow,
    onSuccess: () => {
      queryClient.invalidateQueries(['transactions']);
      queryClient.invalidateQueries(['user']);
      navigate('/dashboard');
    }
  });

  return (
    <div>
      <button onClick={() => step === 1 ? navigate('/dashboard') : setStep(step - 1)} className="flex items-center gap-2">
        <ArrowLeft size={18} /> Back
      </button>
      
      <div className="flex gap-2 mt-4 mb-6">
        {[1,2,3].map(s => <div key={s} className={`h-1 flex-1 rounded ${s <= step ? 'bg-[#84E10E]' : 'bg-[#122A16]'}`} />)}
      </div>

      {step === 1 && (
        <div className="bg-[#122A16] p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Deal Details</h3>
          <input placeholder="Deal Title" onChange={e => setForm({...form, title: e.target.value})} className="w-full mt-4 p-3 rounded bg-[#0A1F0F] border border-[#84E10E]/30" />
          <input placeholder="Other Party Email" onChange={e => setForm({...form, buyer: e.target.value})} className="w-full mt-3 p-3 rounded bg-[#0A1F0F] border-[#84E10E]/30" />
          <input placeholder="Amount ₦" type="number" onChange={e => setForm({...form, amount: e.target.value})} className="w-full mt-3 p-3 rounded bg-[#0A1F0F] border-[#84E10E]/30" />
          <button onClick={() => setStep(2)} className="mt-4 bg-[#84E10E] text-black w-full py-3 rounded-lg font-semibold">Continue</button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-[#122A16] p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Terms & Conditions</h3>
          <textarea placeholder="What is being sold? Delivery terms?" rows={4} onChange={e => setForm({...form, terms: e.target.value})} className="w-full mt-4 p-3 rounded bg-[#0A1F0F] border border-[#84E10E]/30" />
          <button onClick={() => setStep(3)} className="mt-4 bg-[#84E10E] text-black w-full py-3 rounded-lg font-semibold">Continue</button>
        </div>
      )}

      {step === 3 && (
        <div className="bg-[#122A16] p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Fund Escrow</h3>
          <p className="text-[#A3B3A8] mt-2">You will fund: <span className="text-white font-bold">₦{Number(form.amount).toLocaleString()}</span></p>
          <p className="text-[#A3B3A8]">Fee 1.5%: ₦{(form.amount * 0.015).toLocaleString()}</p>
          <button 
            onClick={() => mutation.mutate(form)} 
            disabled={mutation.isPending}
            className="mt-4 bg-[#84E10E] text-black w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            {mutation.isPending ? <Loader2 className="animate-spin" /> : "Pay & Create Deal"}
          </button>
        </div>
      )}
    </div>
  );
}

function EscrowDetail() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: transactions } = useQuery({ queryKey: ['transactions'], queryFn: api.getTransactions });
  const tx = transactions?.data.find(t => t.id == id);

  const confirmMutation = useMutation({
    mutationFn: () => api.confirmDelivery(tx.id),
    onSuccess: () => {
      queryClient.invalidateQueries(['transactions']);
      queryClient.invalidateQueries(['user']);
    }
  });

  if (!tx) return <Loader2 className="animate-spin mx-auto mt-10" />;

  const steps = ["Deal Created", "Funds Secured", "Item Delivered", "Confirmed", "Funds Released"];
  
  return (
    <div>
      <h3 className="text-xl font-bold">{tx.title} - ₦{tx.amount.toLocaleString()}</h3>
      <div className="bg-[#122A16] p-6 rounded-2xl mt-4">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3 mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i <= tx.step ? 'bg-[#84E10E] text-black' : 'bg-[#0A1F0F] border-[#84E10E]/30'}`}>
              {i < tx.step ? <Check size={16} /> : i+1}
            </div>
            <p className={i <= tx.step ? 'font-bold' : 'text-[#A3B3A8]'}>{s}</p>
          </div>
        ))}
      </div>
      {tx.step === 2 && (
        <button 
          onClick={() => confirmMutation.mutate()}
          disabled={confirmMutation.isPending}
          className="mt-4 bg-[#84E10E] text-black w-full py-3 rounded-lg font-semibold flex items-center justify-center"
        >
          {confirmMutation.isPending ? <Loader2 className="animate-spin" /> : "Confirm Delivery"}
        </button>
      )}
    </div>
  );
}

function WalletPage() {
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: api.getUser });
  return (
    <div>
      <h3 className="text-xl font-bold">Wallet</h3>
      <div className="bg-[#122A16] p-6 rounded-2xl mt-4">
        <p className="text-[#A3B3A8]">NGN Balance</p>
        <p className="text-3xl font-bold">₦{user?.data.balance.toLocaleString()}</p>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-[#84E10E] text-black py-2 rounded-lg font-semibold">Add Money</button>
          <button className="flex-1 border border-[#84E10E] py-2 rounded-lg font-semibold">Withdraw</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {['NGN','USD','GHS','KES'].map(c => (
          <div key={c} className="bg-[#122A16] p-3 rounded-xl text-center">{c}</div>
        ))}
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div>
      <h3 className="text-xl font-bold">Settings</h3>
      <div className="bg-[#122A16] p-6 rounded-2xl mt-4 space-y-4">
        <p>Profile</p>
        <p>KYC Verification</p>
        <p>Security</p>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/escrow/new" element={<NewEscrow />} />
            <Route path="/escrow/:id" element={<EscrowDetail />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
                                                                        }
