// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/PausableHelper.sol";
import "./utils/MintBurnFuncs.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract LuxuriousERC20 is MintBurnFuncs, PausableHelper, AccessControl{

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    uint256 private _initialSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 capSupply_,
        uint256 initalSupply_,
        uint8 decimals_
    ) BasicERC20(name_, symbol_, initalSupply_, decimals_)
    {
        _capSupply = capSupply_;
        _totalSupply = initalSupply_;
        _initialSupply = initalSupply_;
        _paused = false;
    }

    function capSupply() public view returns (uint256) {
        return _capSupply;
    }

    function setMinterRole(address account) public onlyOwner {
        _setupRole(MINTER_ROLE, account);
    }

    function setBurnerRole(address account) public onlyOwner {
        _setupRole(BURNER_ROLE, account);
    }

    function mint(address account, uint256 amount) public onlyRole(MINTER_ROLE) returns (bool) {
        _mint(account, amount);
        return true;
    }

    function burn(address account, uint256 amount) public onlyRole(BURNER_ROLE) returns (bool){
        _burn(account, amount);
        return true;
    }
}
