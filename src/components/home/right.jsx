import React from "react";

import { NotificationContainer, NotificationLabel, Notification, NotifUserImage, NotifContent, NotifUserName, NotifMessage, UserListLabel, TotalUserCount, TotalUsersInfoContainer } from './right.styled';

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

            
        </>
    )
}

export default Right;