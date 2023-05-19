import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, auto);
  column-gap: 2%;
  // padding: 0 32px;

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(4, 1fr);
    // padding: 0 16px;
  }
`

export const MetadataTitleContainer = styled.div`
  background-color: lightgrey;

  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 720px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const MetadataContainer = styled.div`
  background-color: lightgrey;
  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 720px) {
    grid-area: auto / auto / auto / span 4;
  }
`
