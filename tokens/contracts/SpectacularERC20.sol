// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ISpectacularERC20.sol";
import "./utils/OwnableAccess.sol";
import "./BasicERC20.sol";

contract SpectacularERC20 is BasicERC20, OwnableAccess, ISpectacularERC20 {
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _currentSupply;
    uint256 private _initialSupply;
    uint256 private _totalSupply;

    uint8 private _decimals;

    string private _name;
    string private _symbol;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 totalSupply_,
        uint256 initalSupply_,
        uint8 decimals_
    ) BasicERC20(name_, symbol_, totalSupply_, decimals_) OwnableAccess(){
        _initialSupply = initalSupply_;
        _currentSupply = _initialSupply;
    }

    function mint(address account, uint256 amount) internal virtual onlyOwner {
        require(account != address(0), "ERC20: mint to the zero address");
        require(_currentSupply + amount <= _totalSupply, "Minting limit reached");

        _beforeTokenTransfer(address(0), account, amount);

        _currentSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    function burn(address account, uint256 amount) internal virtual onlyOwner {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _currentSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    function transfer (
        address to,
        uint256 amount
    ) public virtual override onlyOwner returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    function transferFrom (
        address from,
        address to,
        uint256 amount
    ) public virtual override onlyOwner returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    function approve(
        address spender,
        uint256 amount
    ) public virtual override onlyOwner returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }
}
