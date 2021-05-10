import { UnsupportedChainIdError } from "@web3-react/core";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector
} from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 1337, 31337]
});

const RPC_URLS: { [chainId: number]: string } = {
  1337: "https://localhost:8545" as string,
  31337: "https://localhost:8545" as string
};
const POLLING_INTERVAL = 12000;

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

export enum ConnectorNames {
  Injected = "MetaMask", // could this be other than MetaMask? Dapper maybe?
  WalletConnect = "WalletConnect"
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect
};

export function getErrorMessage(_error: Error) {
  if (_error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (_error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    _error instanceof UserRejectedRequestErrorInjected ||
    _error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(_error);
    return "An unknown error occurred. Check the console for more details.";
  }
}
