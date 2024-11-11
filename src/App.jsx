import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./Airdrop";
import { ShowBalance } from "./ShowBalance";
import { SendSol } from "./SendSol";

function App() {
  const endpoint = import.meta.env.VITE_ENDPOINT;
  console.log("endpoint",endpoint)
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              flexDirection: "column",
              backgroundColor: "black",
              gap: "4px",
              color: "white",
            }}
          >
            <WalletMultiButton />
            <WalletDisconnectButton />
            {/* <Airdrop /> */}
            {/* <ShowBalance /> */}
            <SendSol />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
