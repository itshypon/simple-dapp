import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function Airdrop() {
  const wallet = useWallet();
  const [amount, setAmount] = useState(0);
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    alert("Aidropped sol");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  );
}
