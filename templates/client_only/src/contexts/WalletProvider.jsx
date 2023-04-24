import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import useNetwork from "../hooks/useNetwork";
import useLocalStorage from "../hooks/useLocalStorage";

export const WalletContext = createContext(null);

export default function WalletProvider({ children }) {
  const network = useNetwork();
  const wallet = ethers.Wallet.createRandom().connect(network);

  if (!wallet) {
    return <div>Creating a wallet...</div>;
  }

  return (
    <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>
  );
}
