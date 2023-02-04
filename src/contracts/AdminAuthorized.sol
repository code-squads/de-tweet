pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;
// SPDX-License-Identifier: MIT

contract AdminAuthorized{
    // Private variable to store admin's identity (address)
    address private adminAddress;
    

    // // Stores the basic information of admin when contract it is deployed
    // Data.AdminData adminInfo;
    // // constructor(
    // //     string memory adminName,
    // //     string memory adminBio
    // // ){
    // //     adminInfo = Data.AdminData({
    // //         name: adminName,
    // //         bio: adminBio
    // //     });
    // // }
    // constructor(){
    //     adminInfo = Data.AdminData({
    //         name: "ADMIN",
    //         bio: "Go limitless !!!"
    //     });
    // }
    // function getAdminInfo() public view returns (Data.AdminData memory){
    //     return adminInfo;
    // }
    
    // Stores the identity of admin when contract it is deployed
    constructor(){
        adminAddress = msg.sender;
    }

    // Publicly show the admin's identity (Not used in webapp, but for debugging)
    function admin() public view returns(address) {
        return adminAddress;
    }

    // onlyAdmin modifier validates only if function caller is admin 
    // This can be reused wherever admin authority needs to be verified
    modifier onlyAdmin(){
        require(msg.sender == adminAddress, "Admin authorization required for this action !!");
        _;
    }
    
    // function for the admin to verify their ownership. 
    // Returns true for admin otherwise false
    function isAdmin() public view returns(bool) {
        return msg.sender == adminAddress;
    }
}