import React from 'react'
import Left from '../components/home/left'
import Middle from '../components/home/middle'
import Right from '../components/home/right'
import Navbar from '../components/navbar/navbar'
import { 
  Container, 
  LeftContainer, 
  MiddleContainer, 
  RightContainer
} from './styledComponents/home.styled'

const Home = () => {
  return (
    <>
      <Navbar>
    
      </Navbar>
      <Container>
        <LeftContainer><Left/></LeftContainer>
        <MiddleContainer><Middle/></MiddleContainer>
        <RightContainer>
          <Right></Right>
        </RightContainer>
      </Container>
    </>
  )
}

export default Home