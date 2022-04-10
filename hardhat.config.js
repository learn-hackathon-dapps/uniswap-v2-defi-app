require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.6",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/ArGr_f8X941q4BBlwjMJ6vD-BkRVOcLP",
      accounts: ["98db1f86151f252d704b398ed89d7f35590a5940965c911198170867f0ccaea1"],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
