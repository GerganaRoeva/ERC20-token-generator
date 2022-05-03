const PausableERC20 = artifacts.require("PausableERC20");

module.exports = function (deployer, name, symbol, supply, decimals) {
    name = "NAME";
    symbol = "NM";
    supply = 200;
    decimals = 10;
  deployer.deploy(PausableERC20, name, symbol, decimals, supply);
};
