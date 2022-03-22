const SpectacularERC20 = artifacts.require("SpectacularERC20");

name = "NAME";
symbol = "NM";
totalSupply = 20000;
decimals = 10;
initalSupply = 1000;


contract("SpectacularERC20", accounts => {
    it("should put 20000 in the totalSupply", async () => {
       const instance = await SpectacularERC20.deployed(name, symbol, totalSupply, initalSupply, decimals);
       const balance = await instance.totalSupply();
       assert.equal(balance.toNumber(), 20000);
     });

     it("should put 1000 in the currSupply", async () => {
        const instance = await SpectacularERC20.deployed(name, symbol, totalSupply, initalSupply, decimals);
        const balance = await instance.currentSupply();
        assert.equal(balance.toNumber(), 1000);
      });

    it("should transfer 10 NM to account correctly from owner to acount", async () => {
        const owner = accounts[0];

        const account_one = accounts[1];
        const amount = 10;

        const instance = await SpectacularERC20.deployed(name, symbol, totalSupply, initalSupply, decimals);

        const account_one_starting_balance = await instance.balanceOf(account_one);
        console.log(account_one_starting_balance.toNumber());
        const owner_starting_balance = await instance.balanceOf(owner);

        await instance.transfer(account_one, amount);

        const account_one_ending_balance = await instance.balanceOf(account_one);
        const owner_ending_balance = await instance.balanceOf(owner);
        console.log(account_one_ending_balance.toNumber());

        // assert.equal(
        //   account_one_ending_balance.toNumber(),
        //   account_one_starting_balance.toNumber() + amount,
        //   "Amount wasn't correctly sent to the receiver"
        // );
        assert.equal(
          owner_starting_balance.toNumber(),
          owner_ending_balance.toNumber() + amount,
          "Amount wasn't correctly taken from the sender"
        );
      });
    //
    //   it("should transfer 5 NM to account correctly from acount to acount", async () => {
    //       const owner = accounts[0];
    //
    //       const account_one = accounts[1];
    //       const account_two = accounts[2];
    //
    //       const amount = 5;
    //
    //       const instance = await SpectacularERC20.deployed(name, symbol, totalSupply,initalSupply, decimals);
    //
    //       await instance.transfer(account_one, amount*2);
    //
    //       const account_two_starting_balance = await instance.balanceOf.call(account_two);
    //       const account_one_starting_balance = await instance.balanceOf.call(account_one);
    //
    //       await instance.approve(account_one, amount);
    //
    //       const _allowance = await instance.allowance.call(owner, account_one);
    //
    //       await instance.transferFrom(account_one, account_two, amount);
    //
    //       const account_one_ending_balance = await instance.balanceOf.call(account_one);
    //       const account_two_ending_balance = await instance.balanceOf.call(account_two);
    //
    //       assert.equal(
    //         account_two_ending_balance.toNumber(),
    //         account_two_starting_balance.toNumber() + amount,
    //         "Amount wasn't correctly sent to the receiver"
    //       );
    //       assert.equal(
    //         account_one_starting_balance.toNumber(),
    //         account_one_ending_balance.toNumber() + amount,
    //         "Amount wasn't correctly taken from the sender"
    //       );
    //     });
});
