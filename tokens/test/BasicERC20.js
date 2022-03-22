const BasicERC20 = artifacts.require("BasicERC20");

name = "NAME";
symbol = "NM";
supply = 200;
decimals = 10;

contract("BasicERC20", accounts => {
  it("should put 200 supply", () =>
    BasicERC20.deployed(name, symbol, supply, decimals)
      .then(instance => instance.totalSupply.call())
      .then(_supply => {
        assert.equal(
          _supply.valueOf(),
          200,
          "200 wasn't in the first account"
        );
    }));

    it("should transfer 10 NM to account correctly", async () => {
        const owner = accounts[0];

        const account_one = accounts[1];
        const amount = 10;

        const instance = await BasicERC20.deployed(name, symbol, supply, decimals);

        const account_one_starting_balance = await instance.balanceOf.call(account_one);
        const owner_starting_balance = await instance.balanceOf.call(owner);

        await instance.transfer(account_one, amount);

        const account_one_ending_balance = await instance.balanceOf.call(account_one);
        const owner_ending_balance = await instance.balanceOf.call(owner);

        assert.equal(
          account_one_ending_balance.toNumber(),
          account_one_starting_balance.toNumber() + amount,
          "Amount wasn't correctly sent to the receiver"
        );
        assert.equal(
          owner_starting_balance.toNumber(),
          owner_ending_balance.toNumber() + amount,
          "Amount wasn't correctly taken from the sender"
        );
      });
});
