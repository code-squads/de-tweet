pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;
// SPDX-License-Identifier: MIT

import "./Data.sol";
import "./AdminAuthorized.sol";

// Inherit abilities of admin authorization from above contract
contract Main is AdminAuthorized {
    // Store a single object where
    // Each user's address corresponds to the Data.UserData
    // eg.   0xab32......2c   =>   Data.UserData{.....}
    mapping(address => Data.UserData) registeredUsers;
    Data.UserData[] allRegisteredUsers;


    // Store a list/array of posts for each user separately
    // eg.   0xab32......2c   =>   [Post{.....}, Post{.....}, ... Post{.....}]
    mapping(address => Data.Post[]) userPosts;

    // eg. 0xab32......2c_92   =>   [0x5B3..dC4, 0x8324...d34, 0x92932...abc3)
    mapping(string => address[]) public postLikers;
    mapping(string => mapping(address => bool)) postLikedBy;

    mapping(address => mapping(address => bool)) public followers;
    mapping(address => address[]) public followersArray;
    mapping(address => address[]) public followingArray;
    



    
    // Function for User registration, only permitted to admin
    function userRegistration(
        string memory fname,
        string memory lname,
        string memory bio,
        string memory avatar,
        string memory city,
        string memory country,
        uint256 birthdate,
        Data.Gender gender
    ) public returns (bool){
        require(registeredUsers[msg.sender].birthdate == 0, "User already registered");
        Data.UserData memory newRegisteredUser = Data.UserData({
            myAddress: msg.sender,
            fname: fname,
            lname: lname,
            bio: bio,
            avatar: avatar,
            city: city,
            country: country,
            birthdate: birthdate,
            gender: gender,
            likedPostsCount: 0
        });
        registeredUsers[msg.sender] = newRegisteredUser;
        allRegisteredUsers.push(newRegisteredUser);
        return true;
    }

    // Function to modify user data, only permitted to admin
    function modifyUserData(
        string memory fname,
        string memory lname,
        string memory bio,
        string memory avatar,
        string memory city,
        string memory country,
        uint256 birthdate,
        Data.Gender gender
    ) public returns (bool){
        require(registeredUsers[msg.sender].birthdate > 0, "User is not registered");
        Data.UserData storage targetUser = registeredUsers[msg.sender];
        targetUser.fname = fname;
        targetUser.lname = lname;
        targetUser.bio = bio;
        targetUser.avatar = avatar;
        targetUser.city = city;
        targetUser.country = country;
        targetUser.birthdate = birthdate;
        targetUser.gender = gender;
        return true;
    }

    // Get all user info
    function getAllUsers() public view returns (Data.UserData[] memory){
        return allRegisteredUsers;
    }

    // Get information about specified user
    function getUserInfo(address userAddress) public view returns (Data.UserData memory){
        return registeredUsers[userAddress];
    }

    // Get specified post for a particular user
    function getPost(address user, uint256 idx) public view returns (Data.Post memory){
        require(userPosts[user].length > idx, "Post unavailable !!");
        return userPosts[user][idx];
    }

    // Get all posts for a particular person
    // eg. getUserPosts(0x999...04, "0x999...04_")
    function getUserPosts(address user) public view returns (Data.Post[] memory) {
        return userPosts[user];
    }
    function getUserPostsCount(address user) public view returns (uint256) {
        return userPosts[user].length;
    }

    // Function to add post for the hospitals
    function addPost(
        string memory text,
        uint256 postDate,
        string memory reportMsg,     // Send '' by default
        string[] memory cids,
        string[] memory titles
    ) public returns (uint256) {
        require(cids.length == titles.length, "CIDs and titles of files count must match"); 

        // After push, target index will pe previous length
        uint256 targetPostIdx = userPosts[msg.sender].length;
        userPosts[msg.sender].push();

        Data.Post storage newPost = userPosts[msg.sender][targetPostIdx];
        newPost.postWriter = msg.sender;
        newPost.reported = reportMsg;
        newPost.deleted = false;
        // mapping(address => bool) storage likers;
        // newPost.likers = likers;

        newPost.text = text;
        for (uint256 i=0; i<cids.length; i++) {
            newPost.media.push(Data.Media(titles[i], cids[i]));
        }
        newPost.postDate = postDate;

        // Not necessarily required, as it can be derived from getAllPosts
        return userPosts[msg.sender].length - 1;
    }



    function like(address postWriter, uint256 post_idx, string memory post_ref) public {
        address liker = msg.sender;
        // Check if the specified post exists
        uint256 writerPostsLength = userPosts[postWriter].length;
        require(post_idx >= 0, "Attempt to like post at negative index");
        require(post_idx < writerPostsLength, "Attempt to like Invalid post");
        require(!postLikedBy[post_ref][liker], "Already liked !!");

        registeredUsers[liker].likedPostsCount++;
        userPosts[postWriter][post_idx].likes++;
        postLikedBy[post_ref][liker] = true;
        postLikers[post_ref].push(liker);
    }

    function unlike(address postWriter, uint256 post_idx, string memory post_ref) public {
        address liker = msg.sender;
        // Check if the specified post exists
        uint256 writerPostsLength = userPosts[postWriter].length;
        require(post_idx >= 0, "Attempt to unlike post at negative index");
        require(post_idx < writerPostsLength, "Attempt to unlike Invalid post");
        require(postLikedBy[post_ref][liker], "Post not liked !!");

        postLikedBy[post_ref][liker] = false;
        uint likerIndex;
        for (uint i = 0; i < postLikers[post_ref].length; i++) {
            if (postLikers[post_ref][i] == liker) {
                likerIndex = i;
                break;
            }
        }

        registeredUsers[liker].likedPostsCount--;
        userPosts[postWriter][post_idx].likes--;
        postLikers[post_ref][likerIndex] = postLikers[post_ref][postLikers[post_ref].length-1];
        postLikers[post_ref].pop();
    }

    function hasLike(string memory post_ref, address liker) public view returns (bool) {
        return postLikedBy[post_ref][liker];
    }

    function getPostLikes(string memory post_ref) public view returns (address[] memory) {
        return postLikers[post_ref];
    }



    // Function to delete post, done by the user
    // 'msg.sender' in this function ensures that the user can delete only own posts
    function deletePost(uint256 postID) public returns (bool){
        // Check if the specified post exists
        uint256 postsLength = userPosts[msg.sender].length;
        require(postID >= 0, "Attempt to delete post at negative index");
        require(postID < postsLength, "Attempt to delete Invalid post");

        // Obtain specified Post
        Data.Post storage targetPost = userPosts[msg.sender][postID];

        // Verify that the specified Post isn't already deleted
        require(targetPost.deleted == false, "Post already deleted!");

        // Decline post
        targetPost.deleted = true;
        return true;
    }

    // Function to report post, done by the admin
    // 'msg.sender' in this function ensures that the user can delete only own posts
    function reportPost(address user, uint256 postID, string memory reportMsg) onlyAdmin public returns (bool){
        // Check if the specified post exists
        uint256 postsLength = userPosts[user].length;
        require(postID >= 0, "Attempt to report post at negative index");
        require(postID < postsLength, "Attempt to report Invalid post");

        // Obtain specified Post
        Data.Post storage targetPost = userPosts[user][postID];

        // Verify that the specified Post isn't already deleted
        require(bytes(targetPost.reported).length == 0, "Post already reported !");

        // Decline post
        targetPost.reported = reportMsg;
        return true;
    }




    function follow(address user) public {
        address follower = msg.sender;
        require(user != follower, "Can't follow self !");
        require(!followers[user][follower], "Already following");

        followers[user][follower] = true;
        followersArray[user].push(follower);
        followingArray[follower].push(user);
    }

    function unFollow(address user) public {
        address follower = msg.sender;
        require(user != follower, "Can't unfollow self !");
        require(followers[user][follower], "Not following");

        followers[user][follower] = false;
        uint followerIndex;
        for (uint i = 0; i < followersArray[user].length; i++) {
            if (followersArray[user][i] == follower) {
                followerIndex = i;
                break;
            }
        }

        followersArray[user][followerIndex] = followersArray[user][followersArray[user].length-1];
        followersArray[user].pop();

        uint followingIndex;
        for (uint i = 0; i < followingArray[follower].length; i++) {
            if (followingArray[follower][i] == user) {
                followingIndex = i;
                break;
            }
        }

        followingArray[follower][followingIndex] = followingArray[follower][followingArray[follower].length-1];
        followingArray[follower].pop();
    }


    // Check if a user is following target
    function isFollowing(address user, address target) public view returns (bool) {
        return followers[target][user];
    }


    // Get followers count
    function getFollowersCount(address user) public view returns (uint256){
        return followersArray[user].length;
    }
    // Get followers
    function getFollowers(address user) public view returns (address[] memory) {
        return followersArray[user];
    }


    // Get following count
    function getFollowingCount(address user) public view returns (uint256){
        return followingArray[user].length;
    }
    // Get following
    function getFollowing(address user) public view returns (address[] memory) {
        return followingArray[user];
    }
}