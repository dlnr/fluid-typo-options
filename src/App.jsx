import { useLayoutEffect, useState } from 'react'
import Article from './Article'
import Homepage from './Homepage'
import * as Styled from './App.style'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [page, setPage] = useState('homepage')

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
          <label htmlFor="page">Choose a page:</label>

          <select
            name="page"
            id="page"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          >
            <option value="homepage">homepage</option>
            <option value="article">article</option>
          </select>
        </Styled.MetadataTitleContainer>
        <Styled.MetadataContainer>
          <p>{`Screenwidth: ${screenWidth}px`}</p>
        </Styled.MetadataContainer>
        {page === 'homepage' ? <Homepage /> : <Article />}
      </Styled.Wrapper>
    </>
  )
}

export default App
