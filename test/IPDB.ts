import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress } from "viem";

describe("IPDB", () => {
	async function deployIPDBFixture() {
		const [owner, otherAccount] = await hre.viem.getWalletClients();

		const ipdb = await hre.viem.deployContract("IPDB");

		const publicClient = await hre.viem.getPublicClient();

		return {
			ipdb,
			owner,
			otherAccount,
			publicClient,
		};
	}

	describe("Deployment", () => {
		it("Should set the right owner", async () => {
			const { ipdb, owner } = await loadFixture(deployIPDBFixture);

			expect(await ipdb.read.owner()).to.equal(
				getAddress(owner.account.address),
			);
		});

		it("Should initialize with empty state", async () => {
			const { ipdb } = await loadFixture(deployIPDBFixture);

			expect(await ipdb.read.getState()).to.equal("");
		});
	});

	describe("Updates", () => {
		describe("Events", () => {
			it("Should emit an event on update", async () => {
				const { ipdb, publicClient } = await loadFixture(deployIPDBFixture);

				const hash = await ipdb.write.update(["newCID"]);
				await publicClient.waitForTransactionReceipt({ hash });

				const dbUpdatedEvents = await ipdb.getEvents.dbUpdated();
				expect(dbUpdatedEvents).to.have.lengthOf(1);
				expect(dbUpdatedEvents[0].args.newCid).to.equal("newCID");
			});
		});
	});
});
