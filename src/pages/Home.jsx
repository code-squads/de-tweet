import React from 'react'
import Right from '../components/home/right'
import Navbar from '../components/navbar/navbar'
import { Container, LeftContainer, MiddleContainer, RightContainer } from './styledComponents/home.styled'

const Home = () => {
  return (
    <>
      <Navbar>
    
      </Navbar>
      <Container>
        <LeftContainer>Left</LeftContainer>
        <MiddleContainer>Middle</MiddleContainer>
        <RightContainer>
          <Right></Right>
        </RightContainer>
      </Container>
    </>
  )
}

export default Home