/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMedia } from "../IMedia";

export class IMedia__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IMedia {
    return new Contract(address, _abi, signerOrProvider) as IMedia;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "TokenMetadataURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "awKeyHex",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "objKeyHex",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "editionOf",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IMedia.MintObjectData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "TokenObjectMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "TokenURIUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "auctionTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxArObjectEditionOf",
        type: "uint256",
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mintAddress",
        type: "address",
      },
    ],
    name: "configureMintAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "creatorBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "actor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isApprovedOrOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isCreated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "awKeyHex",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "objKeyHex",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "contentHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "metadataHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "editionOf",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "editionNumber",
            type: "uint256",
          },
        ],
        internalType: "struct IMedia.MintData",
        name: "data",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "platform",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "pool",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "creator",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "owner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "prevOwner",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.BidShares",
        name: "bidShares",
        type: "tuple",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "tokenURI",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "metadataURI",
        type: "string[]",
      },
      {
        internalType: "bytes32[]",
        name: "contentHash",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32[]",
        name: "metadataHash",
        type: "bytes32[]",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "awKeyHex",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "objKeyHex",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "editionOf",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "batchSize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "batchOffset",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialAsk",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintArObjectNonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "bool",
            name: "setInitialAsk",
            type: "bool",
          },
        ],
        internalType: "struct IMedia.MintArObjectData",
        name: "data",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "platform",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "pool",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "creator",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "owner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "prevOwner",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.BidShares",
        name: "bidShares",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IMedia.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "mintArObject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "awKeyHex",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "objKeyHex",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "contentHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "metadataHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "editionOf",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "editionNumber",
            type: "uint256",
          },
        ],
        internalType: "struct IMedia.MintData",
        name: "data",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "platform",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "pool",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "creator",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "owner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "prevOwner",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.BidShares",
        name: "bidShares",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "mintWithSigNonce",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IMedia.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "mintWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IMedia.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "revokeApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenMetadataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfCreatorByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadataURI",
        type: "string",
      },
    ],
    name: "updateTokenMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "updateTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
