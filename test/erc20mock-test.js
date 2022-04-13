const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20Mock", function () {
  let Contract, contract;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    Contract = await ethers.getContractFactory("ERC20Mock");
    contract = await Contract.deploy();
    await contract.deployed()
  })

  it("Should return name and symbol", async function () {
    expect(await contract.name()).to.equal("USDC Coin");
    expect(await contract.symbol()).to.equal("USDC");
  });
});
