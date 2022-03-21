// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IBasicERC-20.sol";

interface ISpectacularERC20 is IBasicERC20 {
    function mint(address account, uint256 amount) external;
    function burn(address account, uint256 amount) external;

}
