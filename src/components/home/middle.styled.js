import styled from "styled-components";

export const CreatePostContainer = styled.div`
    width: 100%;
    padding: 12px;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px #F1F4FB;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    column-gap: 5px;
`

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const ProfilePhoto = styled.div`
    width: 40px;
    height: 40px;
    background: #D9D9D9;
    border-radius: 10px;
`

export const Textarea = styled.textarea`
    height: 80px;
    width: 100%;
    border: none;
    outline: none;
    max-height: 100px;
    resize: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #757575;
    /* background-color: yellow; */
    padding: 3px 8px;
    box-sizing: border-box;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: blue; */
    flex-grow: 1;
`

export const ImageContainer = styled.div`
    position: relative;
`

export const ImageRow = styled.img`
    height: 150px;
    width: 150px;
`

export const Cross = styled.img`
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
`

export const AddImageIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-top: auto;
    cursor: pointer;
`

export const PostButton = styled.div`
    display: flex;
    column-gap: 8px;
    background: #1977F2;
    border-radius: 10px;
    outline: none;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    padding: 8px 23px;
    box-sizing: border-box;
    margin-left: auto;
    margin-top: auto;
    height: 33px;
    filter: drop-shadow(0px 2px 10px rgba(147, 143, 143, 0.38));
    cursor: pointer;
`

export const PostIcon = styled.img`
    /* width: 12px; */


`

export const TogglerContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    margin-top: 35px;
`

export const Toggle = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 8px 24px #F1F4FB;
    border-radius: 10px;
    padding: 8px 18px;
    color: ${props => props.selected? "#1977F2" : "#606060"};
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${props => props.selected? "600" : "500"};
    font-size: 14px;
    cursor: pointer;
`

export const PostsFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 20px;
    flex-grow: 1;
    overflow: auto;
`

export const PostContainer = styled.div`
    width: 100%;
    /* min-height: 200px; */
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px #F1F4FB;
    border-radius: 10px;
    padding: 13px 13px 0px 13px;
    box-sizing: border-box;
    font-family: 'Inter';
    font-style: normal;
`

export const Row1Column2 = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    justify-content: center;
`

export const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    align-items: center;
`  

export const ProfilePhoto2 = styled.div`
    width: 40px;
    height: 40px;
    background: #D9D9D9;
    border-radius: 10px;
`

export const Name = styled.div`
    font-weight: 500;   
    font-size: 14px;
    color: #404040;
`

export const ShortDesc = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #B5B5B5;
`

export const Text = styled.div`
    width: 90%;
    font-weight: 400;
    font-size: 14px;
    color: #202020;
    margin-top: 24px;
    padding-left: 2%;
`

export const Line = styled.div`
    width: 95%;
    height: 1.2px;
    background-color: #EAEAEA;
    align-self: center;
    margin-top: 20px;
`

export const LikeFlex = styled.div`
    height: 34px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Heart = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 20px;
`

export const LikeCount = styled.div`
    font-weight: 400;
    font-size: 10px;
    color: #9D9D9D;
    margin-left: 12px;
`