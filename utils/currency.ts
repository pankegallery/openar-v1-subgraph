import { BigNumber, Wallet } from 'ethers'
import { BaseERC20__factory } from '../typechain'
import { MaxUint256 } from '@ethersproject/constants'

export async function deployCurrency(
  wallet: Wallet,
  name: string = 'DAI',
  symbol: string = 'DAI'
): Promise<string> {
  const bidCurrencyDeployTx = await new BaseERC20__factory(wallet).deploy(
    name,
    symbol,
    BigNumber.from(18)
  )
  await bidCurrencyDeployTx.deployed()
  return bidCurrencyDeployTx.address
}

export async function approveCurrency(
  wallet: Wallet,
  tokenAddress: string,
  to: string
): Promise<void> {
  const tx = await BaseERC20__factory.connect(tokenAddress, wallet).approve(to, MaxUint256)
  await tx.wait()
}

export async function mintCurrency(
  wallet: Wallet,
  tokenAdress: string,
  to: string,
  amount: BigNumber
): Promise<void> {
  const tx = await BaseERC20__factory.connect(tokenAdress, wallet).mint(to, amount)
  await tx.wait()
  console.log(tx)
}
