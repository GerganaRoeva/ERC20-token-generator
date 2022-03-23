// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/MintBurnFuncs.sol";
import "./utils/OwnableAccess.sol";
// import "./BasicERC20.sol";


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
        _initialSupply = initalSupply_;
        _balances[msg.sender] = initalSupply_;
    }

    function capSupply() public view returns (uint256) {
        return _capSupply;
    }

    /* function mint(address account, uint256 amount) public view virtual override onlyOwner {
        require(account != address(0), "ERC20: mint to the zero address");
        require(_totalSupply + amount <= _capSupply, "Minting limit reached");

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    } */

    function mint(address account, uint256 amount) public onlyOwner returns (bool) {
        _mint(account, amount);
        return true;

    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    function burn(address account, uint256 amount) public onlyOwner returns (bool){
        _burn(account, amount);
        return true;

    }

    function transfer (
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address owner =  msg.sender;
        _transfer(owner, to, amount);
        return true;
    }

    function transferFrom (
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender =  msg.sender;
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    function approve(
        address spender,
        uint256 amount
    ) public virtual override returns (bool) {
        address owner =  msg.sender;
        _approve(owner, spender, amount);
        return true;
    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual override{
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override{
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

    }

    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual override{
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

}
