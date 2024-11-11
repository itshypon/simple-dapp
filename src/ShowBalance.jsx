import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getUserBalance() {
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerHTML = balance;
    }

    getUserBalance();

    return <div>
        Balance: <span id="balance"></span> SOL
    </div>
}