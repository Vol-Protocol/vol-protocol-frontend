import { Web3Provider } from "@ethersproject/providers";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { getVolProtocolV1ContractInstance } from "../utils/contracts";

export default function Body() {
  const { chainId, library } = useWeb3React<Web3Provider>();

  const volProtocolV1Contract = getVolProtocolV1ContractInstance(library, chainId);

  return <BodyWrapper></BodyWrapper>;
}

const BodyWrapper = styled.section`
  margin: 0 auto;
  text-align: center;
`;
