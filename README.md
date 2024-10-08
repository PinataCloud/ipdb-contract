## IPDB Contract

This repo is for a conceptual idea of building a distributed database with IPFS, smart contracts, and PGlite. After deploying the contract you will want to use it with the [IPDB app repo](https://github.com/PinataCloud/ipdb). Read more about it [here]

### Development Setup 

Clone the repo and install the dependencies

```
git clone https://github.com/PinataCloud/ipdb-contract && cd ipdb-contract && npm install 
```

Rename the `.env.sample` file to `.env` and fill out the variables 

```
WALLET_PRIVATE_KEY=
ETHERSCAN_API_KEY=
```

The `WALLET_PRIVATE_KEY` would be the private key to your wallet that is deploying the contract; practice basic precautions and use a fresh wallet and start with a testnet first. 

> [!NOTE]
> The `ETHERSCAN_API_KEY` can be used to verify the contract after deployment. If you don’t plan to use it you may want to take out this piece of the `hardhat.config.ts` 
> ```typescript
> etherscan: {
>	  apiKey: process.env.ETHERSCAN_API_KEY,
> },
> ```

To compile the contracts run the following command

```
npx hardhat compile
```

### Deployment

Make sure that your wallet has funds for the EVM chain you plan to deploy to. This repo includes the chains `base`, `base_sepolia`, and `sepolia`, but you can add whichever chain you’d like. To deploy run the following command:

```
npx hardhat ignition ./ignition/modules/IPDB.ts —-network base_sepolia
```

If successful you should see a contract addressed printed out. Save this along with the contents of `artifacts/contracts/IPDB/IPDB.json`
