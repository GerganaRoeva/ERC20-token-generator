const Election = artifacts.require("Election");
const BasicERC20 = artifacts.require("BasicERC20");

module.exports = function (deployer) {
  // for testing purposes
  const start = new Date("July 27, 2020, 23:15:30")
    .valueOf()
    .toString()
    .slice(0, 10);

  const end = new Date("July 27, 2022, 23:15:30")
    .valueOf()
    .toString()
    .slice(0, 10);

  const topic = "Should we something"
  deployer.deploy(Election, BasicERC20.address, start, end, topic);
};
