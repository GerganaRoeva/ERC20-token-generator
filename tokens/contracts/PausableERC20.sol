// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/OwnableAccess.sol";
import "./BasicERC-20.sol";

contract PausableERC20 is  OwnableAccess, BasicERC20 {
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    string private _name;
    string private _symbol;
    uint8 private _decimals;

    uint256 private _totalSupply;
    bool private _paused;

    constructor(
       string memory name_,
       string memory symbol_,
       uint256 totalSupply_,
       uint8 decimals_
    ) BasicERC20("", "", 0, 0) OwnableAccess()
    {
       _name = name_;
       _symbol = symbol_;
       _totalSupply = totalSupply_;
       _paused = false;
       _decimals = decimals_;
    }

    event Paused(address account);
    event Unpaused(address account);

    function paused() public view virtual  returns (bool) {
       return _paused;
    }

    modifier whenNotPaused() {
       require(!paused(), "Pausable: paused");
       _;
    }

    modifier whenPaused() {
       require(paused(), "Pausable: not paused");
       _;
    }

    function _pause() internal virtual whenNotPaused onlyOwner{
       _paused = true;
       emit Paused(_msgSender());
    }

    function _unpause() internal virtual whenPaused onlyOwner{
       _paused = false;
       emit Unpaused(_msgSender());
    }

    function transfer(
        address to,
        uint256 amount
    ) public virtual override whenNotPaused onlyOwner returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override whenNotPaused onlyOwner returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    function approve(
        address spender,
        uint256 amount
    ) public virtual override whenNotPaused onlyOwner returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }
}
