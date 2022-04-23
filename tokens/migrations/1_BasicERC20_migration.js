const BasicERC20 = artifacts.require("BasicERC20");

module.exports = function (deployer, name, symbol, supply, decimals) {
    name = "NAME";
    symbol = "NM";
    supply = 200;
    decimals = 10;
  deployer.deploy(BasicERC20, name, symbol, decimals, supply);
};
