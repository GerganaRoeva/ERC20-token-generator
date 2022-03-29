// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BasicERC20.sol";

abstract contract MintBurnFuncs is BasicERC20{

    uint256 internal _capSupply;

    function _mint(address account, uint256 amount) internal virtual{
        require(account != address(0), "ERC20: mint to the zero address");
        require(_totalSupply + amount <= _capSupply, "Minting limit reached");

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal virtual{
        require(account != address(0), "ERC20: burn from the zero address");

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);
    }
}
