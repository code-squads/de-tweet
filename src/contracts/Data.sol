pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;
// SPDX-License-Identifier: MIT

library Data{
    // Possible values for gender
    // Corresponding values while integrating with web3 or calling fn via remix:
    //          MALE: 0,     FEMALE: 1,     NONBINARY: 2
    enum Gender { MALE, FEMALE, NONBINARY }

    // Object to store basic information about the admin
    // Added during contract deployment & can't be modified later
    struct AdminData {
        string name;
        string bio;
    }

    // Object to store basic information about the user
    // This can be added/modified only by the user 
    struct UserData {
        address myAddress;
        string fname;
        string lname;
        string bio;
        string avatar;
        string city;
        string country;
        uint256 birthdate;
        Gender gender;
        uint256 likedPostsCount;
    }
     

    struct Media {
        string title;
        // string description;
        string cid;
    }

    // Object to store post information
    // This is supposed to be added by the user 
    struct Post {
        // Identifies the writer
        address postWriter;


        // Value set to report message if sensitive/hate content found when creating the post
        // It may be changed to string if reported by the admin
        string reported;

        // Value set to false on creating post and then toggled to true when deleted by user
        bool deleted;

        // mapping(address => bool) likers;

        // Actual post content
        string text;
        Media[] media;
        uint256 postDate;

        int likes;
    }
}