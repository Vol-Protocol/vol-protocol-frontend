import { Web3Provider } from "@ethersproject/providers";

export default function getWeb3Library(provider: any): Web3Provider {
  const web3Library = new Web3Provider(provider, "any");
  web3Library.pollingInterval = 15000;
  return web3Library;
}
