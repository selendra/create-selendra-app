import React, { createContext } from "react";
import { ethers } from "ethers";
import artifact from "../artificats/Counter.json";
import useWallet from "../hooks/useWallet";

export const ContractContext = createContext(null);

export default function ContractProvider({ children }) {
  const wallet = useWallet();

  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const contract = new ethers.Contract(contractAddress, artifact.abi, wallet);

  if (!contract) {
    return <div>Connecting to contract...</div>;
  }
  return (
    <ContractContext.Provider value={contract}>
      {children}
    </ContractContext.Provider>
  );
}
