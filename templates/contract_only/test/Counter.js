const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  async function deployment() {
    const [owner] = await ethers.getSigners();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner };
  }

  describe("Deployment", function () {
    it("Should be 0", async function () {
      const { counter } = await loadFixture(deployment);

      expect(await counter.count()).to.equal(0);
    });

    it("Should be 1", async function () {
      const { counter } = await loadFixture(deployment);

      expect(await counter.increment()).to.equal(1);
    });

    it("Should be 0", async function () {
      const { counter } = await loadFixture(deployment);

      expect(await counter.decrement()).to.equal(0);
    });
  });
});
