import React from 'react'
import styled from 'styled-components'
import YouTubeLogo from '../img/logo.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { AccountCircleOutlined } from '@mui/icons-material';

function Menu({ darkMode, setDarkMode }) {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={YouTubeLogo} />
                    YouTube
                </Logo>
                <Item>
                    <HomeOutlinedIcon /> Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon /> Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon /> Subscriptions
                </Item>

                <Hr />

                <Item>
                    <VideoLibraryOutlinedIcon /> Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon /> History
                </Item>

                <Hr />

                <Login>
                    Sign in to like videos, comments, and subscribe.
                    <Button>
                        <AccountCircleOutlined />
                        Login
                    </Button>
                </Login>

                <Hr />

                <Item>
                    <ExploreOutlinedIcon /> Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon /> Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon /> Gaming
                </Item>
                <Item>
                    <MovieCreationOutlinedIcon /> Movies
                </Item>
                <Item>
                    <FeedOutlinedIcon /> News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon /> Live
                </Item>

                <Hr />

                <Item>
                    <SettingsOutlinedIcon /> Settings
                </Item>
                <Item>
                    <OutlinedFlagOutlinedIcon /> Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon /> Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <LightModeOutlinedIcon /> Light Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu

const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bg};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`

const Wrapper = styled.div`
    padding: 18px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    cursor: pointer;
`

const Img = styled.img`
    height: 25px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div`
    
`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
`