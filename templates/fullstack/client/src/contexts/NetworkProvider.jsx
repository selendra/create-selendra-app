import React, { createContext } from "react";
import { ethers } from "ethers";

export const NetworkContext = createContext(null);

export default function NetworkProvider({ children }) {
  const network = new ethers.JsonRpcProvider(
    "https://indranet-testnet-evm.selendra.org"
  );

  if (!network) {
    return <div>Connecting to network...</div>;
  }
  return (
    <NetworkContext.Provider value={network}>
      {children}
    </NetworkContext.Provider>
  );
}
