import styled from 'styled-components'
import { calculateFluidStyle } from './utils'

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, auto);
  column-gap: 2%;

  @media screen and (max-width: 819px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const MetadataTitleContainer = styled.div`
  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 819px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const MetadataContainer = styled.div`
  grid-area: auto / auto / auto / span 6;
  margin-bottom: 72px;
`

export const HeadingAndIntroContainer = styled.div`
  grid-area: auto / 2 / auto / span 10;

  @media screen and (max-width: 819px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const TextContainer = styled.div`
  grid-area: auto / 3 / auto / span 8;

  @media screen and (max-width: 819px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const Heading1 = styled.h1`
  break-after: avoid;
  break-inside: avoid;
  color: black;
  font-weight: 800;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  box-sizing: border-box;
  font-size: ${calculateFluidStyle(71.11111, 106.6666, 820, 1920)};
  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 819px) {
    font-size: ${calculateFluidStyle(32, 69.89, 375, 819)};
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Intro = styled.p`
  color: black;
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  font-size: ${calculateFluidStyle(26.6666, 40, 820, 1920)};
  line-height: 150%;
  margin-bottom: 80px;

  @media screen and (max-width: 819px) {
    font-size: ${calculateFluidStyle(22, 48.05, 375, 819)};
    line-height: 160%;
    margin-bottom: 56px;
  }
`

export const Paragraph = styled.p`
  color: black;
  font-weight: 400;
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  margin-bottom: 40px;
  line-height: 160%;
  font-size: ${calculateFluidStyle(21.3333, 32, 820, 1920)};

  @media screen and (max-width: 819px) {
    font-size: ${calculateFluidStyle(18, 39.31, 375, 819)};
  }
`
