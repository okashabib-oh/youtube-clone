import React from 'react'
import styled from 'styled-components'

function SignIn() {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in </Title>
                <SubTitle>to continue to YouTube</SubTitle>
                <Input placeholder='username' />
                <Input placeholder='Password' type='password' />
                <Button>Sign in</Button>

                <Title>OR</Title>

                <Input placeholder='Username' />
                <Input placeholder='Email' />
                <Input placeholder='Password' type='password' />
                <Button>Sign up</Button>
            </Wrapper>

            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SignIn

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`

const Title = styled.h1`
    font-size: 24px;
`

const SubTitle = styled.h2`

    font-weight: 300;
    font-size: 20px;
`

const Input = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.soft};
    width: 100%;
    color: ${({ theme }) => theme.text};
    transition: all 250ms;
`

const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
    transition: all 250ms;
    &:hover {
        transition: all 250ms;
        background-color: red;
        color: ${({ theme }) => theme.text};
        border-radius: 20px;
    }
`

const More = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
    margin-top: 10px;
    cursor: pointer;
`
const Links = styled.div`
    margin-left: 50px;
`

const Link = styled.span`
    margin-left: 30px;
`

