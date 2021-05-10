import { Web3ReactProvider } from "@web3-react/core";
import Body from "./components/Body";
import Connectors from "./components/Connectors";
import Header from "./components/Header";
import getWeb3Library from "./utils/providers";

export default function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getWeb3Library}>
        <Header />
        <Connectors />
        <Body />
      </Web3ReactProvider>
    </>
  );
}
