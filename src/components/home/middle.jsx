import React, { useEffect, useRef, useState } from "react";
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
import { getSrc } from "../../constant/avatarResolver";
import { addPost } from "../../apis/posts";
import { useAuth } from "../../context/customAuth";
import { getAllUsers, getUserPosts } from "../../apis/users";
import moment from "moment";

function awaitAll(list, asyncFn) {
    const promises = [];
  
    list.forEach(x => {
      promises.push(asyncFn(x));
    });
  
    return Promise.all(promises);
  }

const Middle = (props) => {
    const { entityInfo } = useAuth()
    const [tweetText, setTweetText] = useState("")
    const inputFile = useRef(null) 
    const [photo, setPhoto] = useState(null)
    const[feed, setFeed] = useState("all")
    const [userInfo, setUserInfo] = useState(props.userInfo);

    const [allUserMap, setAllUserMap] = useState(new Map());
    const [allPosts, setAllPosts] = useState([]);

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
        // const isHateSpeech = await checkHateSpeech();
        // if (isHateSpeech) {
        //     toast.error('Hateful content found in tweet', {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
        //  else {
            const post = {
                text: tweetText,
                postDate: Number(new Date()/1000).toFixed(),
                reportMsg: [],
                cids: [],
                titles: []
            }

            addPost(entityInfo.address, post)
            .then(receipt => {
                toast.success('Tweeted Successfully!');
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
                setTweetText("")
            })
            .catch(error => {
                toast.error('Some Error Occured', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })

            
            // post the call to api
        }
    // };


    useEffect(() => {
        setUserInfo(props.userInfo);
    }, [props.userInfo]);


    useEffect(() => {
        getAllUsers()
          .then(users => {
            //   set(users);
              console.log("All users:", users);

              const allPosts = [];
              awaitAll(users, async user => {
                return await getUserPosts(user.myAddress).then(posts => allPosts.push(...posts));
              })
                .then(() => {
                    allPosts.sort((x, y) => Number(y.postDate)-Number(x.postDate))
                    console.log("All posts ready", allPosts);
                    setAllPosts(allPosts);
                })

              const userMappping = new Map();
              users.map(user => userMappping.set(user.myAddress, user));
              setAllUserMap(userMappping);
          })

    }, []);

    return (
        <>
        <CreatePostContainer open={photo}>
            <ProfilePhoto src={getSrc(userInfo?.gender, userInfo?.avatar)}/>
            <Column2>
                <Textarea placeholder="What’s happening?" value={tweetText} onChange={e => setTweetText(e.target.value)} maxLength={200}/>
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
            {
                allPosts.map(post => {
                    const user = allUserMap.get(post.postWriter)
                    const m1 = new moment(post.postDate*1000)
                    return (
                        <PostContainer key={post.text}>
                            <Row1>
                                <ProfilePhoto2 src={getSrc(user.gender, user.avatar)}/>
                                <Row1Column2>
                                    <Name>{user.fname} {user.lname}</Name>
                                    <ShortDesc>{m1.fromNow()}</ShortDesc>
                                </Row1Column2>
                            </Row1>
                            <Text>
                                {post.text}
                            </Text>
                            <Line/>
                            <LikeFlex>
                                <Heart src={heartIcon}/>
                                <LikeCount>{post.likes} Likes</LikeCount>
                            </LikeFlex>
                        </PostContainer>
                    )
                })
            }
            {/* <PostContainer>
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
            </PostContainer> */}

            {/* <PostContainer>
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
            </PostContainer> */}

            {/* <PostContainer></PostContainer>
            <PostContainer></PostContainer> */}
        </PostsFlexbox>
        </>
    )
}

export default Middle;