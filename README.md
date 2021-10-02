# openAR V1 Subgraph

The [openAR Subgraph](https://github.com/pankegallery/openar-v1-subgraph), is a public subgraph implementation of the Graph Protocol for the openAR Protocol. It syncs with the blockchain and indexes pertinent data about openAR cryptomedia. It also provides an easy to use GraphQL interface for developers to imply query data about the openAR Protocol.

The Graph offers a hosted service for public interaction with the openAR Subgraph, but you can also run your own graph-node with a openAR Subgraph by following the Graph's [documentation](https://thegraph.com/docs/network#indexing) and joining their Indexer discord.

Networks:
- [Rinkeby](https://thegraph.com/explorer/subgraph/pankegallery/openar-v1)
- [Mainnet](https://thegraph.com/explorer/subgraph/pankegallery/openar-v1-rinkeby)

Documentation:
- [Entities](docs/entities.md)
- [Querying](docs/querying.md)

References:
- [Github](https://github.com/pankegallery/openar-v1-subgraph)
- [The Graph](https://thegraph.com/explorer/subgraph/pankegallery/openar-v1)
- [The Graph Querying Docs](https://thegraph.com/docs/query-the-graph)
- [GraphQL](https://graphql.org/)

## Local Setup

### 1. Run Local Blockchain
```
yarn && yarn chain
```

### 2. Setup the Graph-Node

In a separate terminal clone the graph repository in the location of your choice.

```
git clone https://github.com/graphprotocol/graph-node.git
```

start up graph node using docker. 

```
cd graph-node
cd docker 
docker-compose up
```

If for any reason you need to tear down the graph node. Make sure to also delete the data directory

```
docker-compose down
rm -rf ./data
```

### 3. Deploy Contracts to Local Blockchain

In openar/openar-contracts

Terminal 1: 
```
npx hardhat node
```

Terminal 2:
```
yarn dev-deploy
```
Then copy and past the info in addresses/31337.json to the 31337.json file in openar/openar-v1-subgraph/config (create by cloning 1.json if needed). You need to configure market, media, and weth address

### 4. Build and Deploy Subgraph to Local Graph Node

Configure `.env.local`. Copy the fields from the `.env.example`.

Hint: 
- Copy / Paste `http://0.0.0.0:8545` as RPC_ENDPOINT
- Copy / Paste the first Private Key from `./utils/generateWallets` as PK.
- Set `PATH_TO_GRAPH` as the path to the dir of the `graph-node` repository you just cloned.
- Set `FLEEK_API_KEY`
- Set `FLEEK_API_SECRET`


```
yarn prepare:local 
yarn graph-codegen
yarn graph-build
yarn graph-create-local
yarn graph-deploy-local
```

### 5. Seed Contract with Newly Minted Media

```
yarn seed-graph --chainId 31337 --fullMonty
```

### 6. Voila

Open `http://127.0.0.1:8000/` in your browser to get a GraphiQL interface to submit
queries to the subgraph.

You can execute contract functions using the various scripts in `scripts`.

Run them by executing `yarn ts-node scripts/<script name> --chainId <chainID> <args>`


## Running Tests

In a separate terminal start up a blockchain.

```
yarn chain
```

To run tests 

```
yarn prepare:local
yarn codegen
yarn build
yarn test
```

They may take up to 30 minutes to run.

## Advanced Setup

There are many scripts that can be run to customize the data populated in your contracts / subgraph.

**Note**: In order to mint the scripts rely on Fleek as an IPFS pinning service to pin media to ipfs. Minting scripts will not work without Fleek Setup.

In `seed.ts` you have the following options to run for all of the generateWallets
- `--fullyMonty` will deploy a new currency contract, mint currency, approve currency, mintMedia, setRandomAsks, and setRandomBids
- `--asks` will set random asks on all the media minted by the generateWallets
- `--bids` will set random bids on 1 piece of media for each wallet in generateWallets
- `--transfers` will randomly transfer 1 piece of media from each wallet to a randomly selected wallet in generateWallets
- `--removeBids` will remove random bids from Media
- `--accceptRandomBids` will randomly accept bids on Media if they exist
- `--currency` will create a new ERC20 with specified name and symbol and mint funds to each generated wallet of the provider and approve the market contract to transfer
- `--mintCurToAddr` will mint the currency to the specified address
In `media.ts` you can interact directly with the contracts by passing `--funcName` and the name of the function.
You can also mint any media that currently already lives on ipfs by passing in `--funcName mintFromIPFS --mimeType <mimeType`

Example: 

```bash
yarn ts-node scripts/media --chainId 4 --funcName mintFromIPFS --ipfsPath Qmba649sCjuvUk6cY8ca9roFWHdXA7Cp2Ka66SmBdhJy9Y/snowbringerpix.gif --mimeType image/gif
yarn ts-node scripts/seed --chainId 4 --fullyMonty
```
