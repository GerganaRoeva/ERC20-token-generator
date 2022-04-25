const Election = artifacts.require("Election");
const BasicERC20 = artifacts.require("BasicERC20");

module.exports = function (deployer) {
  // for testing purposes
  const start = 0;
  const end = 0;
  deployer.deploy(Election, BasicERC20.address, start, end);
};
