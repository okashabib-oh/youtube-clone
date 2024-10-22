import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <NavBar />
          <Wrapper>
            <h1>Video Cards</h1>
            <h1>Video Cards</h1>
            <h1>Video Cards</h1>
            <h1>Video Cards</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px; */
  color: ${({ theme }) => theme.text};
`