import styled from "styled-components";

export const NotificationLabel = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #808080;
  margin-bottom: 10px;
`

export const NotificationContainer = styled.div`
  border-radius: 10px;
  min-height: 165px;
  max-height: 165px;
  box-shadow: 0px 8px 24px #F1F4FB;
  padding: 12px 25px 12px 12px;
  overflow: auto;
`

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const NotifUserImage = styled.div`
  width: 30px;
  height: 30px;
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
