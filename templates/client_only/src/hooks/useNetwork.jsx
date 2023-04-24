import React, { useContext } from "react";
import { NetworkContext } from "../contexts/NetworkProvider";

export default function useNetwork() {
  return useContext(NetworkContext);
}
