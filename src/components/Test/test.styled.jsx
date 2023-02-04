import styled from "styled-components";

export const TestContainer = styled.div`
  background-color: ${props => props.theme.palette.primary.background};
  color: ${props => props.theme.palette.primary.textColor};
  border: 2px solid ${props => props.theme.palette.primary.textColor};
  min-height: 370px;
  padding: 25px;
`