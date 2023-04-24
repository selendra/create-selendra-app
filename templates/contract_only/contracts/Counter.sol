// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint256 public count;

    function increment()  public {
        count++;
    }

    function decrement()  public {
        if(count > 0) {
            count--;
        }
    }
}
