import React, { useContext } from "react";
import { WalletContext } from "../contexts/WalletProvider";

export default function useWallet() {
  return useContext(WalletContext);
}
