const PausableERC20 = artifacts.require("PausableERC20");

contract("PausableERC20", (accounts) => {
  it("should put 200 supply", () =>
    PausableERC20.deployed()
      .then((instance) => instance.totalSupply.call())
      .then((_supply) => {
        assert.equal(_supply.valueOf(), 200, "200 wasn't in the first account");
      }));

  it("decimals should be equal to 10", () =>
    PausableERC20.deployed()
      .then((instance) => instance.decimals.call())
      .then((_decimals) => {
        assert.equal(_decimals.valueOf(), 10, "decimals not correctly created");
      })
  );

  it("should transfer 10 NM to account correctly from owner to acount", async () => {
    const owner = accounts[0];

    const account_one = accounts[1];
    const amount = 10;

    const instance = await PausableERC20.deployed();

    const account_one_starting_balance = await instance.balanceOf.call(
      account_one
    );
    const owner_starting_balance = await instance.balanceOf.call(owner);

    await instance.transfer(account_one, amount);

    const account_one_ending_balance = await instance.balanceOf.call(
      account_one
    );
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

  it("should transfer 5 to account correctly from acount to acount with allowance", async () => {
    const owner = accounts[0];

    const account_one = accounts[1];
    const account_two = accounts[2];

    const amount = 5;

    const instance = await PausableERC20.deployed();

    const owner_starting_balance = await instance.balanceOf.call(owner);
    const account_two_starting_balance = await instance.balanceOf.call(
      account_two
    );
    const account_one_starting_balance = await instance.balanceOf.call(
      account_one
    );

    await instance.approve(account_one, amount, { from: owner });

    const _allowance = await instance.allowance.call(owner, account_one);

    await instance.transferFrom(owner, account_two, amount, {
      from: account_one,
    });

    const owner_ending_balance = await instance.balanceOf.call(owner);
    const account_one_ending_balance = await instance.balanceOf.call(
      account_one
    );
    const account_two_ending_balance = await instance.balanceOf.call(
      account_two
    );

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

  it("should pause transfer func", async () => {
    const instance = await PausableERC20.deployed();
    const owner = accounts[0];
    const account_one = accounts[1];

    assert.equal(
      await instance.paused(),
      false,
      "Flag for paused not initialiezd correctly"
    );

    await instance.pause({ from: owner });

    assert.equal(
      await instance.paused(),
      true,
      "Flag for paused not changed correctly"
    );

    try {
      await instance.transfer(account_one, 5, { from: owner });
    } catch (error) {
      assert(error, "Transfering when paused");
    }

    try {
      await instance.unpause({ from: account_one });
    } catch (error) {
      assert(error, "Not owner accsesing special func");
    }

    await instance.unpause({ from: owner });

    assert.equal(
      await instance.paused(),
      false,
      "Flag for paused not changed correctly after unpause"
    );

    await instance.transfer(account_one, 5, { from: owner });
  });
});
