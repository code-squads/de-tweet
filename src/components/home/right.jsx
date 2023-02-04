import React from "react";

import { NotificationContainer, NotificationLabel, Notification, NotifUserImage, NotifContent, NotifUserName, NotifMessage } from './right.styled';

const Notifications = [
    {
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
        user: {
            avator: null,
            name: "John Doe"
        },
        message: "Hi, how are you?"
    },
    {
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
                        <Notification>
                            <NotifUserImage></NotifUserImage>
                            <NotifContent>
                                <NotifUserName>{notification.user.name} </NotifUserName>
                                <NotifMessage>&nbsp;{notification.message}</NotifMessage>
                            </NotifContent>
                        </Notification>
                    )
                })}
            </NotificationContainer>
        </>
    )
}

export default Right;