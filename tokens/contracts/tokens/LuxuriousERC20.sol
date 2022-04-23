// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuxuriousERC20 is ERC20Pausable, AccessControl, Ownable{

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    uint8 private _decimals;
    uint256 private _capSupply;
    uint256 private _initialSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        uint256 initialSupply_,
        uint256 capSupply_
    )ERC20(name_, symbol_){
        _mint(msg.sender, initialSupply_);
        _decimals = decimals_;
        _capSupply = capSupply_;
        _initialSupply = initialSupply_;
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function initialSupply() public view returns (uint256) {
        return _initialSupply;
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
        require(totalSupply() + amount <= _capSupply, "Minting limit reached");
        _mint(account, amount);
        return true;
    }

    function burn(address account, uint256 amount) public onlyRole(BURNER_ROLE) returns (bool){
        _burn(account, amount);
        return true;
    }
}
