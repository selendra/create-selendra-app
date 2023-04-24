require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { ALICE } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    //selendra: {
    //  url: "",
    //  chainId: "",
    //  accounts: [ALICE],
    //},
  },
};
