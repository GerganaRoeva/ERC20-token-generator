// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BasicERC20.sol";

abstract contract MintBurnFuncs is BasicERC20{

    string private _name;
    string private _symbol;
    uint8 private _decimals;

    uint256 private _totalSupply;
    uint256 private _currentSupply;


    function mint(address account, uint256 amount) internal virtual{
        require(account != address(0), "ERC20: mint to the zero address");
        require(_currentSupply + amount <= _totalSupply, "Minting limit reached");

        _currentSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

    }

    function burn(address account, uint256 amount) internal virtual{
        require(account != address(0), "ERC20: burn from the zero address");

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _currentSupply -= amount;

        emit Transfer(account, address(0), amount);
    }
}
