// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract SpectacularERC20 is ERC20, Ownable{

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

    function mint(address account, uint256 amount) public onlyOwner returns (bool) {
        require(totalSupply() + amount <= _capSupply, "Minting limit reached");
        _mint(account, amount);
        return true;
    }

    function burn(address account, uint256 amount) public onlyOwner returns (bool){
        _burn(account, amount);
        return true;
    }
}
