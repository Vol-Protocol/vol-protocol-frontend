import { Web3Provider } from "@ethersproject/providers";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { getVolProtocolV1ContractInstance } from "../utils/contracts";

export default function Body() {
  const { chainId, library } = useWeb3React<Web3Provider>();

  const volProtocolV1Contract = getVolProtocolV1ContractInstance(
    library,
    chainId
  );

  let vol;
  if (library !== undefined) {
    try {
      (async () => {
        if (undefined !== typeof window["ethereum"]) {
          vol = await volProtocolV1Contract.getVol();
          vol = vol.toString();
        }
      })();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BodyWrapper>
      <Title>Current ETH Volatility</Title>
      <p>534.61</p>
      <Button>buy vETH</Button>
      <Button>sell vETH</Button>
      <Button>mint vETH</Button>
      <Button>burn vETH</Button>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.section`
  margin: 0 auto;
  text-align: center;
  width: 95%;
`;

const Button = styled.div`
  background-color: white;
  padding: 8px;
  border: 1px solid blue;
  border-radius: 8px;
  display: inline-block;
  margin: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const Title = styled.h3``;
