// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BasicERC-20.sol";
import "./utils/Ownable.sol";

contract Pausable is BasicERC20, Ownable {
    event Paused(address account);
    event Unpaused(address account);

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
   ) BasicERC20("","",0,0) Ownable()
   {
       _name = name_;
       _symbol = symbol_;
       _totalSupply = totalSupply_;
       _paused = false;
       _decimals = decimals_;
   }

   function paused() public view virtual returns (bool) {
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
}
