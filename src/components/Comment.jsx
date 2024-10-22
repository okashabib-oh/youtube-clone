import React from 'react'
import styled from 'styled-components'

function Comment() {
    return (
        <Container>
            <Avatar src='/comment.jpg' />
            <Details>
                <Name> Okasha Habib<Date> 1 hour ago </Date> </Name>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi hic eveniet voluptas quidem laudantium, beatae et at soluta quas suscipit placeat, iure nihil repellendus dolore velit voluptatem quae amet corrupti?</Text>
            </Details>
        </Container>
    )
}

export default Comment

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;    
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`

const Name = styled.span`
    font-weight: 500;
    font-size: 13px;

`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin: 0px 12px;
`

const Text = styled.p`
    font-size: 14px;
`