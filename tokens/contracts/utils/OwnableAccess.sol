// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OwnableAccess{

    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

   constructor() {
       _transferOwnership( msg.sender);
   }

   modifier onlyOwner() {
       require(owner() ==  msg.sender, "Ownable: caller is not the owner");
       _;
   }

   function owner() public view virtual returns (address) {
       return _owner;
   }

   function renounceOwnership() public virtual onlyOwner {
       _transferOwnership(address(0));
   }

   function transferOwnership(address newOwner) public virtual onlyOwner {
       require(newOwner != address(0), "Ownable: new owner is the zero address");
       _transferOwnership(newOwner);
   }

   function _transferOwnership(address newOwner) internal virtual {
       address oldOwner = _owner;
       _owner = newOwner;
       emit OwnershipTransferred(oldOwner, newOwner);
   }
}
