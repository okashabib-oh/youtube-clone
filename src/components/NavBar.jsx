import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <Container>NavBar</Container>
  )
}

export default NavBar

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`