import fs from 'fs-extra';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { MediaFactory } from '../typechain/MediaFactory';
import { MarketFactory } from '../typechain/MarketFactory';
import { ContractTransaction, ethers } from 'ethers';
import { BigNumber } from 'ethers';
import Decimal from '../utils/Decimal';

type DecimalValue = { value: BigNumber };

type PlatformCuts = {
  firstSalePlatform: DecimalValue;
  firstSalePool: DecimalValue;
  furtherSalesPlatform: DecimalValue;
  furtherSalesPool: DecimalValue;
  furtherSalesCreator: DecimalValue;
};

async function start() {
  const args = require('minimist')(process.argv.slice(2));

  if (!args.chainId) {
    throw new Error('--chainId chain ID is required');
  }
  const path = `${process.cwd()}/.env${
    args.chainId === 100 ? '.prod' : args.chainId === 4 ? '.dev' : '.local'
  }`;
  await require('dotenv').config({ path });
  const provider = new JsonRpcProvider(process.env.RPC_ENDPOINT);
  const wallet = new Wallet(`0x${process.env.PRIVATE_KEY_CONTRACT}`, provider);
  const sharedAddressPath = `${process.cwd()}/addresses/${args.chainId}.json`;
  // @ts-ignore
  const addressBook = JSON.parse(await fs.readFileSync(sharedAddressPath));
  if (addressBook.market) {
    throw new Error(
      `market already exists in address book at ${sharedAddressPath}. Please move it first so it is not overwritten`
    );
  }
  if (addressBook.media) {
    throw new Error(
      `media already exists in address book at ${sharedAddressPath}. Please move it first so it is not overwritten`
    );
  }
  
  let platformCuts: PlatformCuts = {
    firstSalePlatform: Decimal.new(10),
    firstSalePool: Decimal.new(5),
    furtherSalesPlatform: Decimal.new(5),
    furtherSalesPool: Decimal.new(5),
    furtherSalesCreator: Decimal.new(5),
  };

  console.log('Deploying Market...');
  const deployTx = await new MarketFactory(wallet).deploy();
  console.log('Deploy TX: ', deployTx.deployTransaction.hash);
  await deployTx.deployed();
  console.log('Market deployed at ', deployTx.address, deployTx.hash);
  addressBook.market = deployTx.address;
  
  let txReceipt = await provider.getTransactionReceipt(deployTx.deployTransaction.hash);
  console.log( console.log('Market deploy gas usage: ', txReceipt.gasUsed.toNumber()));

  console.log('Deploying Media...');
  const mediaDeployTx = await new MediaFactory(wallet).deploy();
  console.log(`Deploy TX: ${mediaDeployTx.deployTransaction.hash}`);
  await mediaDeployTx.deployed();
  console.log(`Media deployed at ${mediaDeployTx.address}`);
  addressBook.media = mediaDeployTx.address;
  txReceipt = await provider.getTransactionReceipt(mediaDeployTx.deployTransaction.hash);
  console.log( console.log('Media deploy gas usage: ', txReceipt.gasUsed.toNumber()));

  let tx: ContractTransaction;

  console.log('Configuring Market...');
  const market = MarketFactory.connect(addressBook.market, wallet);
  
  tx = await market.configure(addressBook.media);
  console.log(`Market configure() tx: ${tx.hash}`);
  await tx.wait();

  tx = await market.configurePlatformAddress(`0x${process.env.ETH_ADDRESS_PLATFORM}`);
  console.log(`Market configurePlatformAddress() tx: ${tx.hash}`);
  await tx.wait();
  txReceipt = await provider.getTransactionReceipt(tx.hash);
  console.log( console.log('Gas usage: ', txReceipt.gasUsed.toNumber()));

  tx = await market.configurePoolAddress(`0x${process.env.ETH_ADDRESS_POOL}`);
  console.log(`Market configurePoolAddress() tx: ${tx.hash}`);
  await tx.wait();
  txReceipt = await provider.getTransactionReceipt(tx.hash);
  console.log( console.log('Gas usage: ', txReceipt.gasUsed.toNumber()));

  tx = await market.configurePlatformCuts(platformCuts);
  console.log(`Market configurePlatformCuts() tx: ${tx.hash}`);
  await tx.wait();
  txReceipt = await provider.getTransactionReceipt(tx.hash);
  console.log( console.log('Gas usage: ', txReceipt.gasUsed.toNumber()));

  tx = await market.configureEnforcePlatformCuts(true);
  console.log(`Market configureEnforcePlatformCuts() tx: ${tx.hash}`);
  await tx.wait();
  txReceipt = await provider.getTransactionReceipt(tx.hash);
  console.log( console.log('Gas usage: ', txReceipt.gasUsed.toNumber()));

  console.log(`Market configured.`);

  console.log('Configuring Media...');
  const media = MediaFactory.connect(addressBook.media, wallet);

  tx = await media.configure(addressBook.market);
  console.log(`Media configure() tx: ${tx.hash}`);
  await tx.wait();
  txReceipt = await provider.getTransactionReceipt(tx.hash);
  console.log( console.log('Gas usage: ', txReceipt.gasUsed.toNumber()));
  console.log(`Media configured.`);

  console.log(`Market: ${addressBook.market}`)
  console.log(`Media: ${addressBook.media}`)
  await fs.writeFile(sharedAddressPath, JSON.stringify(addressBook, null, 2));
  console.log(`Contracts deployed and configured. ☼☽`);
}

start().catch((e: Error) => {
  console.error(e);
  process.exit(1);
});
