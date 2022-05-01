const Election = artifacts.require("Election");
const BasicERC20 = artifacts.require("BasicERC20");

// TODO: test end of voting and result

contract("Election", (accounts) => {
  // it("should create 0 for starting count for votes", async () => {
  //   const election = await Election.deployed();
  //   const result = await election.Result.call();
  //   assert.equal(result.yes.toNumber(), 0, "Not constructed correctly");
  // });

  it("should get current time", async () => {
    const election = await Election.deployed();
    const now = Date.now().valueOf();
    console.log("Unix time ", now);
    const time_from_contract = await election.startTime.call();
    console.log("time from ", time_from_contract.toNumber());

    // assert.equal(
    //   parseInt(now),
    //   parseInt(time_from_contract.toNumber().toString().slice(0, 9)),
    //   "curr time is not the same"
    // );
  });

  // it("should add to yes counter", async () => {
  //   const owner = accounts[0];
  //   const token = await BasicERC20.deployed();
  //   const owner_balance = await token.balanceOf.call(owner);

  //   const election = await Election.deployed();

  //   // // timestamp in js 3 digist longer than in block.timestamp
  //   // const start = new Date("July 27, 2020, 23:15:30")
  //   //   .valueOf()
  //   //   .toString()
  //   //   .slice(0, 10);
  //   //
  //   // const end = new Date("July 27, 2022, 23:15:30")
  //   //   .valueOf()
  //   //   .toString()
  //   //   .slice(0, 10);
  //   //
  //   // await election.setDates(parseInt(start), parseInt(end));
  //   const time_from_contract = await election.getTimestamp.call();
  //   await election.voteYes({ from: owner });
  //   const result = await election.yesResult.call();

  //   assert.equal(
  //     result.toNumber(),
  //     owner_balance.toNumber(),
  //     "vote got incorrectly"
  //   );
  // });
});
