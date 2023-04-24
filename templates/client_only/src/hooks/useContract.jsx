import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractProvider";

export default function useContract() {
  return useContext(ContractContext);
}
