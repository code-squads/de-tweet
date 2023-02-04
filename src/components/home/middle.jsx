import React, { useRef, useState } from "react";
import { 
    CreatePostContainer, 
    Textarea, 
    ProfilePhoto, 
    PostButton,
    PostIcon,
    Column2,
    Row,
    AddImageIcon,
    ImageRow,
    Cross,
    ImageContainer,
    TogglerContainer,
    Toggle,
    PostsFlexbox,
    PostContainer,
    Row1,
    ProfilePhoto2,
    Row1Column2,
    Name,
    ShortDesc,
    Text,
    Line,
    LikeFlex,
    Heart,
    LikeCount
} from "./middle.styled";
import addImages from '../../assets/addImages.svg'
import link from '../../assets/Group 2.svg'
import crossIcon from '../../assets/crossIcon.svg'
import heartIcon from '../../assets/heart.png'

const Middle = () => {

    const inputFile = useRef(null) 
    const [photo, setPhoto] = useState(null)
    const[feed, setFeed] = useState("all")

	const changeHandler = (event) => {
        setPhoto(event.target.files[0])
        event.target.value = null
	};

	const handleSubmission = () => {

	};

    const onButtonClick = () => {
        inputFile.current.click()
        
    };

    const onRemovePhotoClick = () => {
        setPhoto(null)
    }

    return (
        <>
        <CreatePostContainer open={photo}>
            <ProfilePhoto/>
            <Column2>
                <Textarea placeholder="What’s happening?"/>
                {photo && 
                <ImageContainer>
                    <ImageRow src={URL.createObjectURL(photo)}>
                    </ImageRow>
                    <Cross src={crossIcon} onClick={onRemovePhotoClick}/>
                </ImageContainer>}
                <Row>
                    <AddImageIcon src={addImages}  onClick={onButtonClick}/>
                    <PostButton>
                        <PostIcon src={link}/>
                        Post
                    </PostButton>
                    <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={changeHandler}/>
                </Row>
            </Column2>
        </CreatePostContainer>

        <TogglerContainer>
            <Toggle onClick={() => setFeed('all')} selected={feed=='all'}>All</Toggle>
            <Toggle onClick={() => setFeed('following')} selected={feed=='following'}>Following</Toggle>
        </TogglerContainer>

        <PostsFlexbox>
            <PostContainer>
                <Row1>
                    <ProfilePhoto2></ProfilePhoto2>
                    <Row1Column2>
                        <Name>Rupesh Raut</Name>
                        <ShortDesc>18 Hours ago</ShortDesc>
                    </Row1Column2>
                </Row1>
                <Text>
                    Hello Everyone, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea aliqua. ation ullamco laboris
                </Text>
                <Line/>
                <LikeFlex>
                    <Heart src={heartIcon}/>
                    <LikeCount>20 Likes</LikeCount>
                </LikeFlex>
            </PostContainer>

            <PostContainer>
                <Row1>
                    <ProfilePhoto2></ProfilePhoto2>
                    <Row1Column2>
                        <Name>Rupesh Raut</Name>
                        <ShortDesc>18 Hours ago</ShortDesc>
                    </Row1Column2>
                </Row1>
                <Text>
                    Hello Everyone, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea aliqua. ation ullamco laboris
                </Text>
                <Line/>
                <LikeFlex>
                    <Heart src={heartIcon}/>
                    <LikeCount>20 Likes</LikeCount>
                </LikeFlex>
            </PostContainer>
            {/* <PostContainer></PostContainer>
            <PostContainer></PostContainer> */}
        </PostsFlexbox>
        </>
    )
}

export default Middle;