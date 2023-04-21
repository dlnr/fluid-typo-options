import { useLayoutEffect, useState } from 'react'
import Article from './Article'
import Homepage from './Homepage'
import * as Styled from './App.style'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useLayoutEffect(() => {
    const getSizes = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', getSizes)

    return () => {
      window.removeEventListener('resize', getSizes)
    }
  }, [])

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.MetadataTitleContainer>
          <h1>Meta</h1>
        </Styled.MetadataTitleContainer>
        <Styled.MetadataContainer>
          <p>{`Schermbreedte: ${screenWidth}px`}</p>
        </Styled.MetadataContainer>
        <Article />
        {/* <Homepage /> */}
      </Styled.Wrapper>
    </>
  )
}

export default App
