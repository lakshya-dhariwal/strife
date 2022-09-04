// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Strife {
    
    event Deposit (uint amount);

    receive() external payable {
        emit Deposit(msg.value);
        }
   
    function Withdraw(
        address payable _to,
        uint _amount ) external payable{
      _to.transfer(_amount);
    }

}