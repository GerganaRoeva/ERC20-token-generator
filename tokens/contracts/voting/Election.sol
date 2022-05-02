// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IToken is IERC20{}

contract Election {

    IToken public token;

    enum VoteAnswer {
        YES, NO, ABSTAIN
    }

    struct private VoteResults {
        uint256 yes;
        uint256 no;
        uint256 abstain;
    }

    VoteResults private _voteResults;
    string private _topic;
    bool private _agreed;
    uint256 private _startTime;
    uint256 private _endTime;

    mapping(address => bool) private _volted;

    event votedYes();
    event votedNo();
    event votedAbstain();

    modifier onlyTokenholder() {
        require(token.balanceOf(msg.sender) > 0);
        _;
    }

    modifier activVoting() {
        require(
            block.timestamp >= _startTime && block.timestamp <= _endTime,
            "Election is not active"
        );
        _;
    }

    constructor(
        address token_,
        uint256 startTime_,
        uint256 endTime_,
        string memory topic_
    ) {
        token = IToken(token_);
        _voteResults = VoteResults(0, 0, 0);
        _startTime = startTime_;
        _endTime = endTime_;
        _topic = topic_;
    }

    function topic() public view returns (string memory) {
        return _topic;
    }

    function startTime() public view returns (uint256) {
        return _startTime;
    }

    function endTime() public view returns (uint256) {
        return _endTime;
    }

    function resultsYes() public view returns (uint256) {
        return _voteResults.yes;
    }

    function resultsNo() public view returns (uint256) {
        return _voteResults.no;
    }

    function resultsAbstain() public view returns (uint256) {
        return _voteResults.abstain;
    }

    function getWinner() public returns (bool) {
        if (_voteResults.yes > _voteResults.no) {
                _agreed = true;
        }
        else {
            _agreed = false;
        }
        return _agreed;
    }

    function voteYes() public {
        _vote(VoteAnswer.YES);
    }

    function voteNo() public {
        _vote(VoteAnswer.NO);
    }

    function voteAbstain() public {
        _vote(VoteAnswer.ABSTAIN);
    }

    function _vote(VoteAnswer answer) private onlyTokenholder activVoting {
        require(_volted[msg.sender] == false, "Can vote only once");
        uint256 voteWeight = token.balanceOf(msg.sender);

        if (answer == VoteAnswer.YES) {
            _voteResults.yes = _voteResults.yes + voteWeight;
            emit votedYes();
        }
        if (answer == VoteAnswer.NO) {
            _voteResults.no = _voteResults.no + voteWeight;
            emit votedNo();
        }
        if (answer == VoteAnswer.ABSTAIN){
            _voteResults.abstain = _voteResults.abstain + voteWeight;
            emit votedAbstain();
        }
        _volted[msg.sender] = true;
    }

}
