const SpectacularERC20 = artifacts.require("SpectacularERC20");

module.exports = function (deployer, name, symbol, supply, decimals) {
    name = "NAME";
    symbol = "NM";
    supply = 20000;
    decimals = 10;
    initalSupply = 1000;
  deployer.deploy(SpectacularERC20, name, symbol, supply,initalSupply, decimals);
};
