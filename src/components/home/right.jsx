import { React, useState, useEffect } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { NotificationContainer, NotificationLabel, Notification, NotifUserImage, NotifContent, NotifUserName, NotifMessage, UserListLabel, TotalUserCount, TotalUsersInfoContainer, UsersListContainer, UserRow, UserImageForList, UserDetails, UserName2, ShortDesc2, FollowButton, User, SearchContainer, SearchIcon, FontAwesomeSearch, SearchInput, UsersContainer, NoUserContainer } from './right.styled';
import { follow, getAllUsers, getFollowing, unFollow } from "../../apis/users";
import { Avatars, getSrc } from "../../constant/avatarResolver";
import { useAuth } from "../../context/customAuth";
import { toast } from "react-toastify";


const Notifications = [
    {
        id: 1,
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
        id: 2,
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
        id: 3,
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
        id: 4,
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
        id: 5,
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
]

const Right = () => {

    const [queryParam, setQueryParam] = useState('');
    const [users, setUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);
    const { entityInfo } = useAuth();
    const [followingSet, setFollowingSet] = useState(new Set());
    const [refetch, setRefetch] = useState(-1);

    const filteredUsers = users ? users.filter(user => (user.fname + user.lname + user.bio).toLowerCase().includes(queryParam.toLowerCase())) : [];
    const filteredMyFollowingUsers = users ? users.filter(user => (user.fname + user.lname + user.bio).toLowerCase().includes(queryParam.toLowerCase())) : [];

    const filteredFollowingUsers = users ? users.filter(user => (user.fname + user.lname + user.bio).toLowerCase().includes(queryParam.toLowerCase())) : [];

    useEffect(() => {
        if (!entityInfo)
            return;

        getFollowing(entityInfo.address)
            .then(following => {
                const newFollowingSet = new Set(following);
                console.log("My following set", newFollowingSet);
                setFollowingSet(newFollowingSet);
            });

        getAllUsers()
            .then(users => {
                setUsers(users.filter(user => user.myAddress.toLowerCase() !== entityInfo?.address.toLowerCase()));
                console.log("All users:", users);
            })

        getAllUsers()
            .then(followingUsers => {
                setFollowingUsers(followingUsers.filter(followingUser => followingUser.myAddress.toLowerCase() !== entityInfo?.address.toLowerCase()));
                console.log("All users:", followingUsers);

            }, [entityInfo, refetch]);
    });

        useEffect(() => {
            setUsers(newUsers => newUsers.filter(user => user.myAddress.toLowerCase() !== entityInfo?.address.toLowerCase()));
            setFollowingUsers(newFollowingUsers => newFollowingUsers.filter(followingUser => followingUser.myAddress.toLowerCase() !== entityInfo?.address.toLowerCase()));
        }, [entityInfo]);


        function Follow(targetAddress, fname) {
            follow(entityInfo?.address, targetAddress)
                .then(() => {
                    toast.success("Followed " + fname);
                    setRefetch(Math.random())
                });
        }
        function UnFollow(targetAddress, fname) {
            unFollow(entityInfo?.address, targetAddress)
                .then(() => {
                    toast.success("Unfollowed " + fname);
                    setRefetch(Math.random())
                });
        }


        return (
            <>
                <TotalUsersInfoContainer>
                    <UserListLabel>My Following</UserListLabel>
                    <TotalUserCount>
                        {followingUsers.length}
                    </TotalUserCount>
                </TotalUsersInfoContainer>

                <UsersContainer>
                    <SearchContainer>
                        <SearchInput type="text" value={queryParam} onChange={e => { setQueryParam(e.target.value) }} id="searchInput" placeholder="Search User"></SearchInput>
                        <SearchIcon>
                            <FontAwesomeSearch icon={faSearch} />
                        </SearchIcon>
                    </SearchContainer>
                    <UsersListContainer>
                        {filteredMyFollowingUsers.length > 0
                            ? filteredMyFollowingUsers.map((user, index) => {
                                return (
                                    <UserRow key={index}>
                                        <User>
                                            <UserImageForList src={getSrc(user?.gender, user?.avatar)}></UserImageForList>
                                            <UserDetails>
                                                <UserName2>{`${user.fname} ${user.lname}`}</UserName2>
                                                <ShortDesc2>{user['bio']}</ShortDesc2>
                                            </UserDetails>
                                        </User>
                                        {
                                            followingSet.has(user?.myAddress) ?
                                                <FollowButton onClick={() => UnFollow(user.myAddress, user.fname)}>
                                                    Unfollow
                                                </FollowButton>
                                                :
                                                <></>
                                                // <FollowButton onClick={() => Follow(user.myAddress, user.lname)}>
                                                //     Follow
                                                // </FollowButton>
                                        }
                                    </UserRow>
                                );
                            })
                            : filteredMyFollowingUsers.length === 0 && queryParam.length > 0 ? <NoUserContainer>Sorry no user found :(</NoUserContainer>
                                : followingUsers.map((user) => {
                                    return (
                                        <UserRow key={user.id}>
                                            <User>
                                                <UserImageForList />
                                                <UserDetails>
                                                    <UserName2>{user.name}</UserName2>
                                                    <ShortDesc2>{user.shortDesc}</ShortDesc2>
                                                </UserDetails>
                                            </User>
                                            {
                                                followingSet.has(user?.myAddress) ?
                                                    <FollowButton onClick={() => UnFollow(user.myAddress, user.fname)}>
                                                        Unfollow
                                                    </FollowButton>
                                                    :
                                                    <></>
                                                    // <FollowButton onClick={() => Follow(user.myAddress, user.fname)}>
                                                    //     Follow
                                                    // </FollowButton>
                                            }
                                        </UserRow>
                                    );
                                })}
                    </UsersListContainer>
                </UsersContainer>

                <TotalUsersInfoContainer>
                    <UserListLabel>All Users</UserListLabel>
                    <TotalUserCount>
                        {users.length}
                    </TotalUserCount>
                </TotalUsersInfoContainer>

                <UsersContainer>
                    <SearchContainer>
                        <SearchInput type="text" value={queryParam} onChange={e => { setQueryParam(e.target.value) }} id="searchInput" placeholder="Search User"></SearchInput>
                        <SearchIcon>
                            <FontAwesomeSearch icon={faSearch} />
                        </SearchIcon>
                    </SearchContainer>
                    <UsersListContainer>
                        {filteredUsers.length > 0
                            ? filteredUsers.map((user, index) => {
                                return (
                                    <UserRow key={index}>
                                        <User>
                                            <UserImageForList src={getSrc(user?.gender, user?.avatar)}></UserImageForList>
                                            <UserDetails>
                                                <UserName2>{`${user.fname} ${user.lname}`}</UserName2>
                                                <ShortDesc2>{user['bio']}</ShortDesc2>
                                            </UserDetails>
                                        </User>
                                        {
                                            followingSet.has(user?.myAddress) ?
                                                <FollowButton onClick={() => UnFollow(user.myAddress, user.fname)}>
                                                    Unfollow
                                                </FollowButton>
                                                :
                                                <FollowButton onClick={() => Follow(user.myAddress, user.lname)}>
                                                    Follow
                                                </FollowButton>
                                        }
                                    </UserRow>
                                );
                            })
                            : filteredUsers.length === 0 && queryParam.length > 0 ? <NoUserContainer>Sorry no user found :(</NoUserContainer>
                                : users.map((user) => {
                                    return (
                                        <UserRow key={user.id}>
                                            <User>
                                                <UserImageForList />
                                                <UserDetails>
                                                    <UserName2>{user.name}</UserName2>
                                                    <ShortDesc2>{user.shortDesc}</ShortDesc2>
                                                </UserDetails>
                                            </User>
                                            {
                                                followingSet.has(user?.myAddress) ?
                                                    <FollowButton onClick={() => UnFollow(user.myAddress, user.fname)}>
                                                        Unfollow
                                                    </FollowButton>
                                                    :
                                                    <FollowButton onClick={() => Follow(user.myAddress, user.fname)}>
                                                        Follow
                                                    </FollowButton>
                                            }
                                        </UserRow>
                                    );
                                })}
                    </UsersListContainer>
                </UsersContainer>


            </>
        )
}

export default Right;