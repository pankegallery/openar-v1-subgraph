/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Bytes32ToString } from "../Bytes32ToString";

export class Bytes32ToString__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bytes32ToString> {
    return super.deploy(overrides || {}) as Promise<Bytes32ToString>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Bytes32ToString {
    return super.attach(address) as Bytes32ToString;
  }
  connect(signer: Signer): Bytes32ToString__factory {
    return super.connect(signer) as Bytes32ToString__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Bytes32ToString {
    return new Contract(address, _abi, signerOrProvider) as Bytes32ToString;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32",
      },
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x610225610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80639201de551461003a575b600080fd5b61004d610048366004610184565b610063565b60405161005a919061019c565b60405180910390f35b6040805181815260608181018352916000918391602082018180368337019050509050600091505b80518260ff16101561015357600084600260ff85160460ff16602081106100ae57fe5b1a600f1690506000600486600260ff87160460ff16602081106100cd57fe5b1a60f81b6001600160f81b031916901c60f81c90506100eb8161015c565b838560ff16815181106100fa57fe5b60200101906001600160f81b031916908160001a9053508360010193506101208261015c565b838560ff168151811061012f57fe5b60200101906001600160f81b031916908160001a905350506001909201915061008b565b9150505b919050565b6000600a8260ff16101561017757506030810160f81b610157565b506057810160f81b610157565b600060208284031215610195578081fd5b5035919050565b6000602080835283518082850152825b818110156101c8578581018301518582016040015282016101ac565b818111156101d95783604083870101525b50601f01601f191692909201604001939250505056fea264697066735822122002491c1ec3f6bdac2a3d29bbb0d2df122fa53047f6445d10ee5f01b7da80a16464736f6c63430006080033";
