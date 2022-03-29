const LuxuriousERC20 = artifacts.require("LuxuriousERC20");

module.exports = function (deployer, name, symbol, supply, decimals) {
    name = "NAME";
    symbol = "NM";
    supplyCap = 20000;
    decimals = 10;
    initalSupply = 1000;
  deployer.deploy(LuxuriousERC20, name, symbol, supplyCap, initalSupply, decimals);
};
