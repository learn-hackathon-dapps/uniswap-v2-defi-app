// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ERC20MockContract = await hre.ethers.getContractFactory("ERC20Mock");
  const eRC20MockContract = await ERC20MockContract.deploy();
  await eRC20MockContract.deployed();
  console.log("ERC20Mock deployed to:", eRC20MockContract.address);
  saveFrontendFiles("ERC20Mock");

  const DexContract = await hre.ethers.getContractFactory("Dex");
  const dexContract = await DexContract.deploy();
  await dexContract.deployed();
  console.log("Dex deployed to:", dexContract.address);
  saveFrontendFiles("Dex");
}

function saveFrontendFiles(filename) {
  const fs = require("fs");
  const abiDir = __dirname + "/../frontend/src/abis";
  if(!fs.existsSync(abiDir)) {
    fs.mkdirSync(abiDir);
  }
  const artifact = artifacts.readArtifactSync(filename);

  fs.writeFileSync(
    abiDir + "/" + filename + ".json",
    JSON.stringify(artifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });