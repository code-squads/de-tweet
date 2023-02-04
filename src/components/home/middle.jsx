import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
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

    const [tweetText, setTweetText] = useState("")
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

    const checkHateSpeech = async () => {
        // const token = await fetch('https://developer.expert.ai/oauth2/token', {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: 'secretcoders1@gmail.com',
        //         password: 'Secretcoders@01'
        //     })
        // });
        // // console.log(token.json);

        const token = process.env.REACT_APP_HATE_SPEECH_TOKEN;
        const result = await fetch('https://nlapi.expert.ai/v2/detect/hate-speech/en', {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "document": {
                    "text": tweetText
                }
            })
        });
        const resp = await result.json();
        return resp.data.categories.length > 0;
    };

    const onUploadPost = async () => {
        const isHateSpeech = await checkHateSpeech();
        if (isHateSpeech) {
            toast.error('Hateful content found in tweet', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            // post the call to api
        }
    };

    return (
        <>
        <CreatePostContainer open={photo}>
            <ProfilePhoto/>
            <Column2>
                <Textarea placeholder="What’s happening?" value={tweetText} onChange={e => setTweetText(e.target.value)}/>
                {photo && 
                <ImageContainer>
                    <ImageRow src={URL.createObjectURL(photo)}>
                    </ImageRow>
                    <Cross src={crossIcon} onClick={onRemovePhotoClick}/>
                </ImageContainer>}
                <Row>
                    <AddImageIcon src={addImages}  onClick={onButtonClick}/>
                    <PostButton onClick={onUploadPost}>
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