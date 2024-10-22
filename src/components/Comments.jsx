import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

function Comments() {
    return (
        <Container>
            <NewComment>
                <Avatar src='/thumbnail.png' />
                <Input placeholder='Write a comment...' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments

const Container = styled.div``

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
    width: 50px;
   height: 50px;
   border-radius: 50%;
`

const Input = styled.input`
    background-color: transparent;
    border: none;
    padding: 5px;
    width: 100%;
    outline: none;
    border-bottom: 1px solid #ccc;
    color: ${({ theme }) => theme.text};
`