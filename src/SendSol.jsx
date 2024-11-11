import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export function SendSol() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendToken() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    await wallet.sendTransaction(transaction, connection);
    alert("Sent" + amount + " SOL to " + to);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          id="to"
          placeholder="To"
          style={{ padding: "4px", borderRadius: "50", marginTop: "16px" }}
        />

        <input
          type="text"
          id="amount"
          placeholder="Amount"
          style={{ padding: "4px", borderRadius: "50", gap: "4" }}
        />
      </div>
      <div
        style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={sendToken}
          style={{ padding: "4px", fontSize: "medium" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
