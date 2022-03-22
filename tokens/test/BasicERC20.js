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

////
// CHECK BALNCE WITH .THEN
////
  //   it("should transfer 10 NM to account", () => {
  //       const account_one = accounts[0];
  //       const amount = 10;
  //
  //   return BasicERC20.deployed(name, symbol, supply, decimals)
  //     .then(instance => {
  //       instance.transfer(accounts[0], amount);
  //     })
  //     .then(blance => {
  //       instance.balanceOf.call(accounts[0]);
  //     })
  //     .then(() => {
  //       assert.equal(
  //         blance,
  //         amount,
  //         "transfer did not work aas expected"
  //       );
  //     });
  // });


  // it("should send coin correctly", () => {
  //    let meta;
  //    // Get initial balances of first and second account.
  //   const account_one = accounts[0];
  //   const account_two = accounts[1];
  //
  //   let account_one_starting_balance;
  //   let account_two_starting_balance;
  //   let account_one_ending_balance;
  //   let account_two_ending_balance;
  //
  //   const amount = 10;
  //
  //   return BasicERC20.deployed(name, symbol, supply, decimals)
  //     .then(instance => {
  //       meta = instance;
  //       return meta.balanceOf.call(account_one);
  //     })
  //     .then(balance => {
  //       account_one_starting_balance = balance.toNumber();
  //       return meta.balanceOf.call(account_two);
  //     })
  //     .then(balance => {
  //       account_two_starting_balance = balance.toNumber();
  //       return meta.transfer(account_two, amount, { from: account_one });
  //     })
  //     .then(() => meta.balanceOf.call(account_one))
  //     .then(balance => {
  //       account_one_ending_balance = balance.toNumber();
  //       return meta.balanceOf.call(account_two);
  //     })
  //     .then(balance => {
  //       account_two_ending_balance = balance.toNumber();
  //
  //       assert.equal(
  //         account_one_ending_balance,
  //         account_one_starting_balance - amount,
  //         "Amount wasn't correctly taken from the sender"
  //       );
  //       assert.equal(
  //         account_two_ending_balance,
  //         account_two_starting_balance + amount,
  //         "Amount wasn't correctly sent to the receiver"
  //       );
  //     });
  // });
});
