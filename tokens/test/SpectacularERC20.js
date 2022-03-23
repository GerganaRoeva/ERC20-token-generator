const SpectacularERC20 = artifacts.require("SpectacularERC20");

// name = "NAME";
// symbol = "NM";
// totalSupply = 99995;
// decimals = 10;
// initalSupply = 8642;

contract("SpectacularERC20", accounts => {
    it("should put 1000 in the totalSupply", async () => {
       const instance = await SpectacularERC20.deployed();
       const balance = await instance.totalSupply();
       assert.equal(balance.toNumber(), 20000);
     });

     it("should put 500 in the currSupply", async () => {
        const instance = await SpectacularERC20.deployed();
        const balance = await instance.currentSupply();
        assert.equal(balance.toNumber(), 1000);
      });

    // it("should transfer 1 to account correctly from owner to acount", async () => {
    //     const owner = accounts[0];
    //
    //     const account_one = accounts[1];
    //     const amount = 1;
    //
    //     const instance = await SpectacularERC20.deployed();
    //
    //     const account_one_starting_balance = await instance.balanceOf(account_one);
    //     const owner_starting_balance = await instance.balanceOf(owner);
    //
    //     await instance.transfer(account_one, amount);
    //
    //     const account_one_ending_balance = await instance.balanceOf(account_one);
    //     const owner_ending_balance = await instance.balanceOf(owner);
    //
    //     assert.equal(
    //       account_one_ending_balance.toNumber(),
    //       account_one_starting_balance.toNumber() + amount,
    //       "Amount wasn't correctly sent to the receiver"
    //     );
    //     assert.equal(
    //       owner_starting_balance.toNumber(),
    //       owner_ending_balance.toNumber() + amount,
    //       "Amount wasn't correctly taken from the sender"
    //     );
    // });

    it("should transfer 1 to account correctly from owner to acount", async () => {
        const instance = await SpectacularERC20.deployed();

        const amount = 5;
        const owner_starting_balance = await instance.balanceOf.call(accounts[0]);
        const account_one_starting_balance = await instance.balanceOf.call(accounts[1]);

        await instance.transfer(accounts[1], 5);

        const owner_ending_balance = await instance.balanceOf.call(accounts[0])
        const account_one_ending_balance = await instance.balanceOf.call(accounts[1])

        assert.equal(
            owner_ending_balance.toNumber(),
            owner_starting_balance.toNumber() - amount,
            'accounts[0] balance is wrong'
        );
        assert.equal(
            account_one_ending_balance.toNumber(),
            account_one_starting_balance.toNumber() + amount,
            'accounts[1] balance is wrong'
        );
    });

      it("should transfer 1 to account correctly from acount to acount with allowance", async () => {
          const owner = accounts[0];

          const account_one = accounts[1];
          const account_two = accounts[2];

          const amount = 5;

          const instance = await SpectacularERC20.deployed();

          const owner_starting_balance = await instance.balanceOf.call(owner);
          const account_two_starting_balance = await instance.balanceOf.call(account_two);
          const account_one_starting_balance = await instance.balanceOf.call(account_one);

          await instance.approve(account_one, amount, {from: owner});

          const _allowance = await instance.allowance.call(owner, account_one);

          await instance.transferFrom(owner, account_two, amount, {from: account_one});

          const owner_ending_balance = await instance.balanceOf.call(owner);
          const account_one_ending_balance = await instance.balanceOf.call(account_one);
          const account_two_ending_balance = await instance.balanceOf.call(account_two);

          assert.equal(
            account_two_ending_balance.toNumber(),
            account_two_starting_balance.toNumber() + amount,
            "Amount wasn't correctly sent to the receiver"
          );
          assert.equal(
            account_one_starting_balance.toNumber(),
            account_one_ending_balance.toNumber(),
            "Amount was incorrectly taken from the msg.sender"
          );
          assert.equal(
            owner_starting_balance.toNumber() - amount,
            owner_ending_balance.toNumber(),
            "Amount was incorrectly taken from the sender"
          );
        });

        // it("should give accounts[1] authority to spend account[0]'s token", function() {
        //   var token;
        //   return SpectacularERC20.deployed().then(function(instance){
        //    token = instance;
        //    return token.approve(accounts[1], 50);
        //   }).then(function(){
        //    return token.allowance.call(accounts[0], accounts[1]);
        //   }).then(function(result){
        //    assert.equal(result.toNumber(), 50, 'allowance is wrong');
        //    return token.transferFrom(accounts[0], accounts[2], 50, {from: accounts[1]});
        //   }).then(function(){
        //    return token.balanceOf.call(accounts[0]);
        //   }).then(function(result){
        //    assert.equal(result.toNumber(), 60, 'accounts[0] balance is wrong');
        //    return token.balanceOf.call(accounts[1]);
        //   }).then(function(result){
        //    assert.equal(result.toNumber(), 70, 'accounts[1] balance is wrong');
        //    return token.balanceOf.call(accounts[2]);
        //   }).then(function(result){
        //    assert.equal(result.toNumber(), 50, 'accounts[2] balance is wrong');
        //   })
// });
});
