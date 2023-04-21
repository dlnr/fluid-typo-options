import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    color: red;
  }
`

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, auto);
  column-gap: 2vw;

  @media screen and (max-width: 853px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const MetadataTitleContainer = styled.div`
  background-color: lightgrey;

  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const MetadataContainer = styled.div`
  background-color: lightgrey;

  grid-area: auto / auto / auto / span 12;
  margin-bottom: 72px;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`
