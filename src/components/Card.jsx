import React from 'react'
import styled from 'styled-components'

function Card() {
    return (
        <Container>
            <Image src='/thumbnail.png' />
        </Container>
    )
}

export default Card

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    background-color: #999;
`