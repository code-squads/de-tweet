import React, {useState, useEffect} from "react";
import { 
    Address, 
    ColumnName1, 
    ColumnName2, 
    ColumnNames, 
    CopyIcon, 
    Count, 
    Heading, 
    Heading2, 
    MostLikedPersonsRow, 
    MostLikedPersonsRowColumn2, 
    MyProfile, 
    MyProfileContainer, 
    Name, 
    Name2, 
    PersonsWhoLikedMostPostsContainer, 
    PostsLiked, 
    ProfilePhoto, 
    ProfilePhoto2, 
    Row1, 
    Row1Column2, 
    Row2, 
    Row3, 
    Row3SubContainer, 
    Row4, 
    Row4Div, 
    ShortDesc, 
    ShortDesc2,
    Spent
} from "./left.styled";
import Copy from '../../assets/copyIcon.png'
import { useAuth } from "../../context/customAuth";
import { getFollowersCount, getFollowingCount, getUserInfo, getUserPosts } from "../../apis/users";
import { toast } from "react-toastify";


const Left = () => {
    const { loggedIn, entityInfo } = useAuth();

    const [fetching, setFetching] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const [userMetaData, setUserMetaData] = useState({
        followers: 50,
        following: 50,
        postsLiked: 50,
        posts: 50,
    })

    useEffect(() => {
        if(!entityInfo)
            return;
        const userAddress = entityInfo.address;
        console.log("Fetching info for", userAddress);
        getUserInfo(userAddress)
            .then(user => {
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

    const CopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard !');
    }
    
    return (
        <>
            <MyProfileContainer>
                <Row1>
                    <ProfilePhoto></ProfilePhoto>
                    <Row1Column2>
                        <Name>
                            {
                                userInfo ?
                                <>
                                    { userInfo.fname } { userInfo.lname }
                                </>
                                :
                                <>
                                    Rupesh Raut
                                </>
                            }
                        </Name>
                        <ShortDesc>
                            { userInfo ? userInfo.bio : "About Me !"}
                        </ShortDesc>
                    </Row1Column2>
                </Row1>
                <Row2>
                    <Address>
                        {
                            entityInfo ? entityInfo.address : "0x0000000000000000000000000000000000000000"
                        }
                    </Address>
                    <CopyIcon src={Copy} onClick={() => CopyToClipboard(entityInfo?.address || "0x0000000000000000000000000000000000000000")}/>
                </Row2>
                <Row3>
                    <Row3SubContainer>
                        <Heading>My Posts</Heading>
                        <Count>
                            { userMetaData.posts }
                        </Count>
                    </Row3SubContainer>
                    <Row3SubContainer>
                        <Heading>Following</Heading>
                        <Count>
                            { userMetaData.following }
                        </Count>
                    </Row3SubContainer>
                    <Row3SubContainer>
                        <Heading>Followers</Heading>
                        <Count>
                            { userMetaData.followers }
                        </Count>
                    </Row3SubContainer>
                    <Row3SubContainer>
                        <Heading>Posts Liked</Heading>
                        <Count>
                            { userMetaData.postsLiked }
                        </Count>
                    </Row3SubContainer>
                </Row3>
                <Row4>
                    <Row4Div>
                        <MyProfile>My Profile</MyProfile>
                    </Row4Div>
                </Row4>
            </MyProfileContainer>

            <Heading2>Users who liked most posts</Heading2>

            <PersonsWhoLikedMostPostsContainer>
                <ColumnNames>
                    <ColumnName1>posts liked</ColumnName1>
                    <ColumnName2>spent</ColumnName2>
                </ColumnNames>
                <MostLikedPersonsRow>
                    <ProfilePhoto2/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>John Walker</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>1.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>John Walker</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>1.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>John Walker</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>1.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>John Walker</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>1.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>John Walker</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>1.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>John Walker</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>1.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>John Walker</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>1.758</Spent>
                </MostLikedPersonsRow>
            </PersonsWhoLikedMostPostsContainer>
        </>
    )
}

export default Left;