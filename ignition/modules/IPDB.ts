// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const IPDB = buildModule("IPDBModule", (m) => {
	const ipdb = m.contract("IPDB");

	return { ipdb };
});

export default IPDB;
