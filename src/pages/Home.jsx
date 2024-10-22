import styled from '@emotion/styled'
import React from 'react'
import Card from '../components/Card'

function Home() {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Container>
  )
}

export default Home

const Container = styled.div`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`