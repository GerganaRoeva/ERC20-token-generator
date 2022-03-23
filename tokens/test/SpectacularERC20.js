const SpectacularERC20 = artifacts.require("SpectacularERC20");

contract("SpectacularERC20", accounts => {
    it("should put 20000 in the capSupply", async () => {
       const instance = await SpectacularERC20.deployed();
       const balance = await instance.capSupply();
       assert.equal(balance.toNumber(), 20000);
     });

     it("should put 1000 in the totalSupply", async () => {
        const instance = await SpectacularERC20.deployed();
        const balance = await instance.totalSupply();
        assert.equal(balance.toNumber(), 1000);
      });

    it("should transfer 5 to account correctly from owner to acount", async () => {
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

      it("should transfer 5 to account correctly from acount to acount with allowance", async () => {
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

    it("should mint 5", async () => {
        const owner = accounts[0];
        const account_one = accounts[1];
        const account_two = accounts[2];
        const amount = 5;

        const instance = await SpectacularERC20.deployed();

        const account_two_starting_balance = await instance.balanceOf.call(account_two);
        const starting_supply = await instance.totalSupply();

        await instance.mint(account_two, amount, {from: owner});

        const account_two_ending_balance = await instance.balanceOf.call(account_two);
        const ending_supply = await instance.totalSupply();

        try {
            await instance.mint(account_one, 5, {from: account_two});
        }
        catch (error) {
            assert(error, "Non owner minted");
        }

        assert.equal(
            starting_supply.toNumber() + amount,
            ending_supply.toNumber() ,
            "Supply wasn't correctly increased"
        );
        assert.equal(
            account_two_starting_balance.toNumber(),
            account_two_ending_balance.toNumber() - amount,
            "Amount was incorrectly given to the msg.sender"
        );
    });

    it("should burn 5", async () => {
        const owner = accounts[0];
        const account_one = accounts[1];
        const account_two = accounts[2];
        const amount = 5;

        const instance = await SpectacularERC20.deployed();

        const account_two_starting_balance = await instance.balanceOf.call(account_two);
        const starting_supply = await instance.totalSupply();

        await instance.burn(account_two, amount, {from: owner});

        const account_two_ending_balance = await instance.balanceOf.call(account_two);
        const ending_supply = await instance.totalSupply();

        try {
            await instance.burn(account_one, 5, {from: account_two});
        }
        catch (error) {
            assert(error, "Non owner burned");
        }

        assert.equal(
            starting_supply.toNumber() - amount,
            ending_supply.toNumber() ,
            "Supply wasn't correctly increased"
        );
        assert.equal(
            account_two_starting_balance.toNumber(),
            account_two_ending_balance.toNumber() + amount,
            "Amount was incorrectly given to the msg.sender"
        );
    });
});
