// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// TODO: Voting only onece

interface IToken is IERC20{}

contract Election {
    enum VoteAnswer {
        YES, NO, ABSTAIN
    }

    struct VoteResults{
        uint256 yes;
        uint256 no;
        uint256 abstain;
    }

    IToken public token;
    uint256 public startTime;
    uint256 public endTime;
    VoteResults public voteResults;
    bool private _agreed;

    event votedYes();
    event votedNo();
    event votedAbstain();

    modifier onlyTokenholder() {
        require(token.balanceOf(msg.sender) > 0);
        _;
    }

    modifier ActivVoting() {
        require(block.timestamp >= startTime && block.timestamp <= endTime, "Election is not active");
        _;
    }

    modifier EndedVoting() {
        require(block.timestamp > endTime, "Election is still going");
        _;
    }

    constructor(IToken _token, uint256 _startTime, uint256 _endTime) {
        token = _token;
        voteResults = VoteResults(0, 0, 0);
        startTime = _startTime;
        endTime = _endTime;
    }
///////////////////////////////////////////////
    // finctions for test usage
    function setDates(uint256 _startTime, uint256 _endTime) public {
        startTime = _startTime;
        endTime = _endTime;
    }

    function getTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function yesResult() public view returns (uint256) {
        return voteResults.yes;
    }
///////////////////////////////////////////////

    function voteYes() public {
        _vote(VoteAnswer.YES);
    }

    function voteNo() public {
        _vote(VoteAnswer.NO);
    }

    function voteAbstain() public {
        _vote(VoteAnswer.ABSTAIN);
    }

    function getWinner() public EndedVoting returns (bool) {
        if ( voteResults.yes > voteResults.no ) {
            if(voteResults.yes > voteResults.abstain) {
                _agreed = true;
            }
        }
        else {
            _agreed = false;
        }
        return _agreed;
    }

    function _vote(VoteAnswer answer) private onlyTokenholder ActivVoting{
        uint256 voteWeight = token.balanceOf(msg.sender);

        if (answer == VoteAnswer.YES) {
            voteResults.yes = voteResults.yes + voteWeight;
            emit votedYes();
        }
        if (answer == VoteAnswer.NO) {
            voteResults.no = voteResults.no + voteWeight;
            emit votedNo();
        }
        if (answer == VoteAnswer.ABSTAIN){
            voteResults.abstain = voteResults.abstain + voteWeight;
            emit votedAbstain();
        }
    }

}
