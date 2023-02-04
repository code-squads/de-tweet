import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Notification List

export const NotificationLabel = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #808080;
  margin-bottom: 10px;
`

export const NotificationContainer = styled.div`
  border-radius: 10px;
  height: 154px;
  box-shadow: 0px 8px 24px #F1F4FB;
  background: #FFFFFF;
  padding: 12px 25px 12px 12px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  &:first-child {
    margin-top: 0;
  }
`

export const NotifUserImage = styled.div`
  width: 35px;
  height: 35px;
  background: #D9D9D9;
  border-radius: 10px;
  margin-right: 10px;
`

export const NotifContent = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  line-height: 1.25;
`

export const NotifUserName = styled.div`
  font-weight: 500;
  color: #202020;
`

export const NotifMessage = styled.div`
  color: #606060;
`

// User List

export const TotalUsersInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const UserListLabel = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #808080;
  margin-bottom: 10px;
`

export const TotalUserCount = styled.div`
  width: 31px;
  height: 18px;
  background: #FFFFFF;
  box-shadow: 0px 8px 24px #F1F4FB;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #202020;
`

export const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    padding-top: 0;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px #F1F4FB;
    border-radius: 10px;
    box-sizing: border-box;
    row-gap: 15px;
    height: 350px;
    overflow: auto;
    position: relative;
`

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  flex-grow: 1;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const UserRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    align-items: center;
    justify-content: space-between;
`  

export const UserImageForList = styled.div`
    width: 40px;
    height: 40px;
    background: #D9D9D9;
    border-radius: 10px;
`

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    justify-content: center;
`

export const User = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 15px;
`

export const UserName2 = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: #404040;
`

export const ShortDesc2 = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #B5B5B5;
`
export const FollowButton = styled.button`
  width: 57px;
  height: 23px;
  background: #1977F2;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border: none;
  outline: none;
`

export const SearchInput = styled.input`
  position: relative;
  width: 310px;
  height: 15px;
  background-color: #F4F5F8;
  border-radius: 10px;
  margin-bottom: 8px;
  border: none;
  padding: 10px 10px 10px 44px;
  position: sticky;
  &:focus, :focus-visible {
    border: 1px solid #202020;
    outline: none;
  }
`

export const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  padding-top: 12px;
`

export const SearchIcon = styled.span`
  position: absolute;
  top: 20px;
  left: 10px;
`

export const FontAwesomeSearch = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: gray;
`

export const NoUserContainer = styled.div`
  color: #B4B4B4;
`