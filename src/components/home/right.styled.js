import styled from "styled-components";

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
