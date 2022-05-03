// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/PausableHelper.sol";
import "./BasicERC20.sol";

contract PausableERC20 is BasicERC20, PausableHelper {

    constructor(
       string memory name_,
       string memory symbol_,
       uint256 totalSupply_,
       uint8 decimals_
    ) BasicERC20(name_, symbol_, totalSupply_, decimals_) OwnableAccess()
    {
       _paused = false;
    }

    function pause() public virtual whenNotPaused onlyOwner returns (bool) {
        _pause();
        return true;
    }

    function unpause() public virtual whenPaused onlyOwner returns (bool) {
        _unpause();
        return true;
    }

    function transfer(
        address to,
        uint256 amount
    ) public virtual override whenNotPaused returns (bool) {
        address owner = msg.sender;
        _transfer(owner, to, amount);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override whenNotPaused returns (bool) {
        address spender =  msg.sender;
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    function approve(
        address spender,
        uint256 amount
    ) public virtual override whenNotPaused returns (bool) {
        address owner = msg.sender;
        _approve(owner, spender, amount);
        return true;
    }
}
