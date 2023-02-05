import React, {useState, useEffect} from 'react'
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
import { getFollowersCount, getFollowingCount, getUserInfo, getUserPosts } from "../apis/users"
import { useAuth } from '../context/customAuth'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const { loggedIn, entityInfo } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate()

  const [userMetaData, setUserMetaData] = useState({
    followers: 0,
    following: 0,
    postsLiked: 0,
    posts: 0,
})

  useEffect(() => {
    if(!entityInfo)
        return;
    const userAddress = entityInfo.address;
    console.log("Fetching info for", userAddress);
    getUserInfo(userAddress)
        .then(user => {
            if(user.birthdate == '0') {
                navigate('/signup')
            }
            console.log(user);
            setUserInfo(user);
            setUserMetaData(prev => ({ ...prev, postsLiked: user.likedPostsCount }));
        });
    getFollowersCount(userAddress)
        .then(followers => setUserMetaData(prev => ({ ...prev,  followers })));
    getFollowingCount(userAddress)
        .then(following => setUserMetaData(prev => ({ ...prev,  following })));
    getUserPosts(userAddress)
        .then(posts => {
            console.log("Users' posts", posts);
            setUserMetaData(prev => ({ ...prev, posts: posts.length }))
        });
    
}, [entityInfo])

  return (
    <>
      <Navbar>
      </Navbar>
      <Container>
        <LeftContainer>
          <Left
            userMetaData={userMetaData}
            userInfo={userInfo}
          />
        </LeftContainer>
        <MiddleContainer>
          <Middle
            userInfo={userInfo}
          />
          </MiddleContainer>
        <RightContainer>
          <Right></Right>
        </RightContainer>
      </Container>
    </>
  )
}

export default Home