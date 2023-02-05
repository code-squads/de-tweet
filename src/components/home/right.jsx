import { React, useState, useEffect } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { NotificationContainer, NotificationLabel, Notification, NotifUserImage, NotifContent, NotifUserName, NotifMessage, UserListLabel, TotalUserCount, TotalUsersInfoContainer, UsersListContainer, UserRow, UserImageForList, UserDetails, UserName2, ShortDesc2, FollowButton, User, SearchContainer, SearchIcon, FontAwesomeSearch, SearchInput, UsersContainer, NoUserContainer } from './right.styled';
import { getAllUsers } from "../../apis/users";
import { Avatars, getSrc } from "../../constant/avatarResolver";


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

// const Users = [
//     {
//         id: 1,
//         avator: null,
//         name: "John Doe",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 2,
//         avator: null,
//         name: "Omkar",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 3,
//         avator: null,
//         name: "Raunak",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 4,
//         avator: null,
//         name: "abhishek",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 5,
//         avator: null,
//         name: "Hi",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 6,
//         avator: null,
//         name: "Hello",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 7,
//         avator: null,
//         name: "Nice",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 8,
//         avator: null,
//         name: "Good",
//         shortDesc: "Famous Scientist"
//     },
//     {
//         id: 9,
//         avator: null,
//         name: "Spit",
//         shortDesc: "Famous Scientist"
//     },
// ]

const Right = () => {

    const [queryParam, setQueryParam] = useState('');
    const [users, setUsers] = useState([]);

    const filteredUsers = users ? users.filter(user => user.fname.toLowerCase().includes(queryParam.toLowerCase())) : [];

    useEffect(() => {
      getAllUsers()
        .then(users => {
            setUsers(users);
            console.log("All users:", users);
        })
    }, [])
    

    return (
        <>
            <NotificationLabel>Notifications</NotificationLabel>
            <NotificationContainer>
                {Notifications.map((notification) => {
                    return (
                        <Notification key={notification.id}>
                            <NotifUserImage></NotifUserImage>
                            <NotifContent>
                                <NotifUserName>{notification.user.name} </NotifUserName>
                                <NotifMessage>&nbsp;{notification.message}</NotifMessage>
                            </NotifContent>
                        </Notification>
                    )
                })}
            </NotificationContainer>

            <TotalUsersInfoContainer>
                <UserListLabel>All Users</UserListLabel>
                <TotalUserCount>100</TotalUserCount>
            </TotalUsersInfoContainer>

            <UsersContainer>
                <SearchContainer>
                    <SearchInput type="text" value={queryParam} onChange={e => {setQueryParam(e.target.value)}} id="searchInput" placeholder="Search User"></SearchInput>
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
                                    <FollowButton onClick={() => console.log('click')}>Follow</FollowButton>
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
                                        <FollowButton onClick={() => console.log('click')}>Follow</FollowButton>
                                    </UserRow>
                                );
                            })}
                </UsersListContainer>
            </UsersContainer>


        </>
    )
}

export default Right;