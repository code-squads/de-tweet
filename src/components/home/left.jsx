import React from "react";
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


const Left = () => {
    return (
        <>
            <MyProfileContainer>
                <Row1>
                    <ProfilePhoto></ProfilePhoto>
                    <Row1Column2>
                        <Name>Rupesh Raut</Name>
                        <ShortDesc>SDE Intern | MERN Dev</ShortDesc>
                    </Row1Column2>
                </Row1>
                <Row2>
                    <Address>0xC257274276a4E539741Ca11b590B9447B26A8051</Address>
                    <CopyIcon src={Copy}/>
                </Row2>
                <Row3>
                    <Row3SubContainer>
                        <Heading>My Posts</Heading>
                        <Count>10</Count>
                    </Row3SubContainer>
                    <Row3SubContainer>
                        <Heading>Following</Heading>
                        <Count>10</Count>
                    </Row3SubContainer>
                    <Row3SubContainer>
                        <Heading>Followers</Heading>
                        <Count>10</Count>
                    </Row3SubContainer>
                    <Row3SubContainer>
                        <Heading>Posts Liked</Heading>
                        <Count>10</Count>
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