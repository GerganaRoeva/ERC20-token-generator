// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/MintBurnFuncs.sol";
import "./utils/OwnableAccess.sol";
// import "./BasicERC20.sol";


contract SpectacularERC20 is MintBurnFuncs, OwnableAccess{

    uint256 private _currentSupply;
    uint256 private _initialSupply;
    uint256 private _totalSupply;

    uint8 private _decimals;

    string private _name;
    string private _symbol;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 totalSupply_,
        uint256 initalSupply_,
        uint8 decimals_
    ) BasicERC20(name_, symbol_, totalSupply_, decimals_) OwnableAccess(){
        _currentSupply = initalSupply_;
        _initialSupply = initalSupply_;
        _balances[msg.sender] = initalSupply_;
    }

    function currentSupply() public view returns (uint256) {
        return _currentSupply;
    }

    function mint(address account, uint256 amount) internal virtual override onlyOwner {
        require(account != address(0), "ERC20: mint to the zero address");
        require(_currentSupply + amount <= _totalSupply, "Minting limit reached");

        _currentSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    function burn(address account, uint256 amount) internal virtual override onlyOwner {
        require(account != address(0), "ERC20: burn from the zero address");

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _currentSupply -= amount;

        emit Transfer(account, address(0), amount);
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
