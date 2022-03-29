// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/MintBurnFuncs.sol";
import "./utils/OwnableAccess.sol";

contract SpectacularERC20 is MintBurnFuncs, OwnableAccess{

    uint256 private _initialSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 capSupply_,
        uint256 initalSupply_,
        uint8 decimals_
    ) BasicERC20(name_, symbol_, initalSupply_, decimals_) OwnableAccess(){
        _capSupply = capSupply_;
        _balances[msg.sender] = initalSupply_;
    }

    function capSupply() public view returns (uint256) {
        return _capSupply;
    }

    function mint(address account, uint256 amount) public onlyOwner returns (bool) {
        _mint(account, amount);
        return true;
    }

    function burn(address account, uint256 amount) public onlyOwner returns (bool){
        _burn(account, amount);
        return true;
    }
}
