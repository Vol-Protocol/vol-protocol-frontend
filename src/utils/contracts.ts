import { Contract } from "@ethersproject/contracts";
import {
  volProtocolV1AddressDev,
  volProtocolV1AbiDev
} from "../contracts/VolProtocolV1ContractDev";

export function getVolProtocolV1ContractInstance(
  _web3Library,
  _chainId: number
): any {
  return new Contract(
    volProtocolV1AddressDev,
    volProtocolV1AbiDev,
    _web3Library
  );
}
