import { formatUnits } from "@ethersproject/units";
import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Account />
        <Balance />
        <Network />
      </HeaderWrapper>
    </>
  );
}

function Account() {
  const { account } = useWeb3React();

  return (
    <>
      <span>Account:</span>
      <span>
        {account === null
          ? "-"
          : account
          ? `${account.substring(0, 6)}...${account.substring(
              account.length - 4
            )}`
          : ""}
      </span>
    </>
  );
}

function Balance() {
  const { account, library, chainId } = useWeb3React();

  const [balance, setBalance] = React.useState<any | null>();
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Balance:</span>
      <span>
        {balance === null ? "Error" : balance ? `${formatUnits(balance)}` : ""}
      </span>
    </>
  );
}

function Network() {
  const { active, error } = useWeb3React();
  const { chainId } = useWeb3React();

  return (
    <>
      <span>{chainId === 1 ? "Mainnet" : "Testnet"}</span>
      <span>{active ? "🟢" : error ? "🔴" : "🟠"}</span>
    </>
  );
}

const HeaderWrapper = styled.section`
  display: flex,
  gridGap: 1rem,
  maxWidth: 20rem,
  minHeight: 400px,
  margin: auto
`;
