import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.20",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts",
	},
	networks: {
		base_sepolia: {
			url: "https://sepolia.base.org",
			accounts: [`${process.env.WALLET_PRIVATE_KEY}`],
		},
		base: {
			url: "https://mainnet.base.org",
			accounts: [`${process.env.WALLET_PRIVATE_KEY}`],
		},
		sepolia: {
			url: "https://ethereum-sepolia-rpc.publicnode.com",
			accounts: [`${process.env.WALLET_PRIVATE_KEY}`],
		},
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
};

export default config;
