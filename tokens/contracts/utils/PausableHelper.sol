// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/OwnableAccess.sol";

abstract contract PausableHElper is OwnableAccess{

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
