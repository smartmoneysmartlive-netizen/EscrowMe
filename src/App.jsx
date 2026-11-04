import { useEffect, useState } from 'react';
import { authService } from './lib/auth';
import { escrowService } from './lib/escrow';

export default function App(){
  const [user,setUser]=useState(null);
  useEffect(()=>{ authService.getUser().then(setUser); },[]);
  const createTest=async()=>{
    if(!user){ alert('Login first at cloud.appwrite.io'); return; }
    await escrowService.create({ buyerId:user.$id, sellerId:'seller_demo', amount:5000, productName:'Test Laptop' });
    alert('Escrow created! Check Appwrite DB');
  };
  return (
    <div style={{maxWidth:600,margin:'40px auto',fontFamily:'system-ui',padding:20}}>
      <h1 style={{fontSize:32}}>EscrowMe</h1>
      <p>Best Escrow for African Businesses</p>
      <hr/>
      <p>{user?`Logged as ${user.email}`:'Not logged - setup Appwrite Auth'}</p>
      <button onClick={createTest} style={{padding:'12px 20px',background:'black',color:'white',borderRadius:8,marginTop:10}}>Create Test Escrow (5,000 NGN)</button>
      <p style={{marginTop:20,fontSize:13}}>Status flow: pending_payment → funded → in_delivery → delivered → released</p>
      <p style={{fontSize:12,color:'#666'}}>Grok push failed because it had no repo write permission. You fixed it manually.</p>
    </div>
  );
}