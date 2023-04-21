import styled from 'styled-components'
import { calculateFluidStyle } from './utils'

export const Hero = styled.h1`
  break-after: avoid;
  break-inside: avoid;
  color: black;
  font-weight: 800;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  box-sizing: border-box;
  font-size: ${calculateFluidStyle(75, 96, 854, 1920)};
  line-height: 100%;
  margin-bottom: 64px;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(32, 75, 320, 853)};
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const TwelveColumn = styled.div`
  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const EightColumn = styled.div`
  grid-area: auto / auto / auto / span 8;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const FourColumn = styled.div`
  grid-area: auto / auto / auto / span 4;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const Heading4 = styled.h1`
  break-after: avoid;
  break-inside: avoid;
  color: black;
  font-weight: 800;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  box-sizing: border-box;
  font-size: ${calculateFluidStyle(25, 28, 854, 1920)};
  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(20, 25, 320, 853)};
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Link = styled.a`
  line-height: 160%;
  font-weight: 400;
  color: #004699;
  text-decoration: none;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: ${calculateFluidStyle(17, 18, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(16, 17, 320, 853)};
  }

  :focus,
  :hover {
    text-decoration: underline;
  }
`
