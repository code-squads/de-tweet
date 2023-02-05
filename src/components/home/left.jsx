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
import { Navigate, useNavigate } from "react-router-dom";
import { Avatars, getSrc } from "../../constant/avatarResolver";


const Left = (props) => {
    const { loggedIn, entityInfo } = useAuth();

    const [fetching, setFetching] = useState(true);
    const [userInfo, setUserInfo] = useState(props.userInfo);

    const navigate = useNavigate()
    const [userMetaData, setUserMetaData] = useState(props.userMetaData)

    useEffect(() => {
        setUserInfo(props.userInfo)
        setUserMetaData(props.userMetaData)
    }, [props.userInfo, props.userMetaData])

    // useEffect(() => {
    //     if(!entityInfo)
    //         return;
    //     const userAddress = entityInfo.address;
    //     console.log("Fetching info for", userAddress);
    //     getUserInfo(userAddress)
    //         .then(user => {
    //             if(user.birthdate == '0') {
    //                 navigate('/signup')
    //             }
    //             console.log(user);
    //             setUserInfo(user);
    //             setUserMetaData(prev => ({ ...prev, postsLiked: user.likedPostsCount }));
    //         });
    //     getFollowersCount(userAddress)
    //         .then(followers => setUserMetaData(prev => ({ ...prev,  followers })));
    //     getFollowingCount(userAddress)
    //         .then(following => setUserMetaData(prev => ({ ...prev,  following })));
    //     getUserPosts(userAddress)
    //         .then(posts => {
    //             console.log("Users' posts", posts);
    //             setUserMetaData(prev => ({ ...prev, posts: posts.length }))
    //         });
        
    // }, [entityInfo])

    const CopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard !');
    }

    
    return (
        <>
            <MyProfileContainer>
                <Row1>
                    <ProfilePhoto src={getSrc(userInfo?.gender, userInfo?.avatar)}></ProfilePhoto>
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
                    <ProfilePhoto2 src={getSrc('0', 'm2')}/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>Allan Walker</Name2>
                        <ShortDesc2>Famous Singer</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>34</PostsLiked>
                    <Spent>8.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2 src={getSrc('1', 'f1')}/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>Beyounce Knowles</Name2>
                        <ShortDesc2>Singer | Actress</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>7.758</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2 src={getSrc('1', 'f2')}/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>Emma Watson</Name2>
                        <ShortDesc2>Actress</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>13</PostsLiked>
                    <Spent>5.230</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2 src={getSrc('1', 'f4')}/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>Peggy Janes</Name2>
                        <ShortDesc2>Athlete</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>10</PostsLiked>
                    <Spent>3.123</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2 src={getSrc('0', 'm2')}/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>Jake Brain</Name2>
                        <ShortDesc2>Famous Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>43</PostsLiked>
                    <Spent>4.212</Spent>
                </MostLikedPersonsRow>
                <MostLikedPersonsRow>
                    <ProfilePhoto2 src={getSrc('0', 'm3')}/>
                    <MostLikedPersonsRowColumn2>
                        <Name2>Bradd Pitt</Name2>
                        <ShortDesc2>Scientist</ShortDesc2>
                    </MostLikedPersonsRowColumn2>
                    <PostsLiked>23</PostsLiked>
                    <Spent>0.342</Spent>
                </MostLikedPersonsRow>
            </PersonsWhoLikedMostPostsContainer>
        </>
    )
}

export default Left;