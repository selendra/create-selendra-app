import NetworkProvider from "./contexts/NetworkProvider";
import ContractProvider from "./contexts/ContractProvider";
import WalletProvider from "./contexts/WalletProvider";
import Home from "./pages/Home";

function App() {
  return (
    <NetworkProvider>
      <WalletProvider>
        <ContractProvider>
          <Home />
        </ContractProvider>
      </WalletProvider>
    </NetworkProvider>
  );
}

export default App;
