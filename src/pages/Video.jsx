import { DownloadOutlined, ReplyOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments'
import Card from '../components/Card'

function Video() {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="720"
                        src="https://www.youtube.com/embed/yIaXoop8gl4?si=Tv3gRsMCaL9oc3ko"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </VideoWrapper>
                <Title>Test video</Title>
                <Details>
                    <Info>9,876,899 views &#x2022; Oct 23, 2024</Info>
                    <Buttons>
                        <Button> <ThumbUpOutlined /> 99</Button>
                        <Button> <ThumbDownOutlined /> Dislike</Button>
                        <Button> <ReplyOutlined /> Share</Button>
                        <Button> <DownloadOutlined /> Download</Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src='/channel_img.jpg' />
                        <ChannelDetail>
                            <ChannelName>YouTube</ChannelName>
                            <ChannelCounter>199K Subscribers</ChannelCounter>
                            <ChannelDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos aut nihil ratione consequatur eius delectus odio officia? Pariatur ipsam optio, a magni similique maiores odio sapiente eligendi nesciunt quasi.</ChannelDescription>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommendation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    )
}

export default Video

const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
    flex: 5;
`
const VideoWrapper = styled.div``

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
    align-items: center;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Recommendation = styled.div`
    flex: 2;
`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`

const Subscribe = styled.button`
 background: ${({ theme }) => theme.text};
 font-weight: 500;
 color: ${({ theme }) => theme.bg};
 border-radius: 20px;
 cursor: pointer;
 height: max-content;
 padding: 10px 15px;
 border: none;
`

const Image = styled.img`
    width: 50px;
   height: 50px;
   border-radius: 50%;
`

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
    gap: 5px;
`

const ChannelName = styled.span`
    font-weight: 500;
`

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
    font-size: 12px;
`

const ChannelDescription = styled.p`
    font-size: 14px;
`
