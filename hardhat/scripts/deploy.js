const hre = require("hardhat");

async function main() {
  const Strife = await hre.ethers.getContractFactory("Strife");
  const strife = await Strife.deploy();

  await strife.deployed();

  console.log("Contract deployed to:", strife.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
