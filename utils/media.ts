import { Wallet } from '@ethersproject/wallet'
import { Media__factory, Market__factory } from '../typechain'
import Decimal from '@zoralabs/core/dist/utils/Decimal'
import { BigNumber, Bytes } from 'ethers'
import { SolidityBid, SolidityAsk, MintData } from '../utils/types'

export async function mint(mediaAddress: string, wallet: Wallet, mintData: MintData) {
  const media = await Media__factory.connect(mediaAddress, wallet)
  const tx = await media.mint(mintData, {
    creator: Decimal.new(0),
    pool: Decimal.new(10),
    platform: Decimal.new(5),
    owner: Decimal.new(90),
    prevOwner: Decimal.new(0),
  })
  await tx.wait()
}

export async function burn(mediaAddress: string, wallet: Wallet, tokenId: BigNumber) {
  const media = await Media__factory.connect(mediaAddress, wallet)
  const tx = await media.burn(tokenId)
  console.log(tx)
  await tx.wait()
}

export async function updateTokenURI(
  mediaAddress: string,
  wallet: Wallet,
  tokenId: BigNumber,
  tokenURI: string
) {
  const media = await Media__factory.connect(mediaAddress, wallet)
  const tx = await media.updateTokenURI(tokenId, tokenURI)
  console.log(tx)
  await tx.wait()
}

export async function updateTokenMetadataURI(
  mediaAddress: string,
  wallet: Wallet,
  tokenId: BigNumber,
  tokenMetadataURI: string
) {
  const media = await Media__factory.connect(mediaAddress, wallet)
  const tx = await media.updateTokenMetadataURI(tokenId, tokenMetadataURI)
  console.log(tx)
  await tx.wait()
}

export async function totalSupply(mediaAddress: string, wallet: Wallet) {
  const media = Media__factory.connect(mediaAddress, wallet)
  return await media.totalSupply()
}

export async function approve(
  mediaAddress: string,
  wallet: Wallet,
  tokenId: BigNumber,
  toAddress: string
) {
  const media = Media__factory.connect(mediaAddress, wallet)
  const tx = await media.approve(toAddress, tokenId)
  console.log(tx)
  await tx.wait()
}

export async function approveForAll(
  mediaAddress: string,
  wallet: Wallet,
  operator: string,
  approved: boolean
) {
  const media = Media__factory.connect(mediaAddress, wallet)
  const tx = await media.setApprovalForAll(operator, approved)
  console.log(tx)
  await tx.wait()
}

export async function transfer(
  mediaAddress: string,
  wallet: Wallet,
  tokenId: BigNumber,
  to: string
): Promise<string> {
  const media = Media__factory.connect(mediaAddress, wallet)
  const tx = await media.transferFrom(wallet.address, to, tokenId)
  await tx.wait()
  return tx.hash
}

export async function setAsk(
  marketAddress: string,
  wallet: Wallet,
  tokenId: BigNumber,
  ask: SolidityAsk
) {
  const market = await Market__factory.connect(marketAddress, wallet)
  const tx = await market.setAsk(tokenId, ask)
  console.log(tx)
  await tx.wait()
}

export async function removeAsk(
  marketAddress: string,
  wallet: Wallet,
  tokenId: BigNumber
) {
  const market = await Market__factory.connect(marketAddress, wallet)
  const tx = await market.removeAsk(tokenId)
  console.log(tx)
  await tx.wait()
}

export async function setBid(
  marketAddress: string,
  wallet: Wallet,
  tokenId: BigNumber,
  bid: SolidityBid
) {
  const market = Market__factory.connect(marketAddress, wallet)
  const tx = await market.setBid(tokenId, bid)
  console.log(tx)
  await tx.wait()
}

export async function removeBid(
  marketAddress: string,
  wallet: Wallet,
  tokenId: BigNumber
) {
  const market = Market__factory.connect(marketAddress, wallet)
  const tx = await market.removeBid(tokenId)
  console.log(tx)
  await tx.wait()
}

export async function acceptBid(
  marketAddress: string,
  wallet: Wallet,
  tokenId: BigNumber,
  bid: SolidityBid
) {
  const market = Market__factory.connect(marketAddress, wallet)
  const tx = await market.acceptBid(tokenId, bid)
  console.log(tx)
  await tx.wait()
}
