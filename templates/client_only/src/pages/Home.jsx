import React, { useEffect } from "react";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import useContract from "../hooks/useContract";
import useWallet from "../hooks/useWallet";
import { ethers } from "ethers";

export default function Home() {
  const [count, setCount] = useState(0);
  const wallet = useWallet();
  const contract = useContract();

  const getCount = async () => {
    const value = await contract.count();
    setCount(ethers.formatUnits(value));
  };

  const increment = async () => {
    const inc = await contract.increment();
    await inc.wait();
    await getCount();
  };

  const decrement = async () => {
    const inc = await contract.decrement();
    await inc.wait();
    await getCount();
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>Wallet: {wallet.address}</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
