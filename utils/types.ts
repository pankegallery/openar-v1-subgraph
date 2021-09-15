import { BigNumberish, Bytes, BigNumber } from 'ethers'

export type SolidityAsk = {
  currency: string
  amount: BigNumberish
}

export type SolidityBid = {
  currency: string
  amount: BigNumberish
  sellOnShare: { value: BigNumberish }
  bidder: string
  recipient: string
}

export type MintData = {
  awKeyHex: Bytes;
  objKeyHex: Bytes;
  tokenURI: string;
  metadataURI: string;
  contentHash: Bytes;
  metadataHash: Bytes;
  editionOf: BigNumberish;
  editionNumber: BigNumberish;
};


export type MintArObjectData = {
  awKeyHex: Bytes;
  objKeyHex: Bytes;
  editionOf: BigNumber;
  initialAsk: BigNumber;
  mintArObjectNonce: BigNumber;
  currency: string;
  setInitialAsk: boolean;
};

export type MediaData = {
  awKeyHex: string;
  objKeyHex: string;
  editionOf: BigNumberish;
  editionNumber: BigNumberish;
};
