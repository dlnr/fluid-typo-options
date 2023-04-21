import styled from 'styled-components'
import { calculateFluidStyle } from './utils'

export const HeadingAndIntroContainer = styled.div`
  grid-area: auto / 2 / auto / span 10;

  @media screen and (max-width: 853px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const TextContainer = styled.div`
  grid-area: auto / 3 / auto / span 8;

  @media screen and (max-width: 853px) {
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
  font-size: ${calculateFluidStyle(59, 72, 854, 1920)};
  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(32, 59, 320, 853)};
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Heading2 = styled.h1`
  break-after: avoid;
  break-inside: avoid;
  color: black;
  font-weight: 800;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  box-sizing: border-box;
  font-size: ${calculateFluidStyle(41, 48, 854, 1920)};
  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(28, 41, 320, 853)};
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Heading3 = styled.h1`
  break-after: avoid;
  break-inside: avoid;
  color: black;
  font-weight: 800;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  box-sizing: border-box;
  font-size: ${calculateFluidStyle(35, 40, 854, 1920)};
  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(24, 35, 320, 853)};
    line-height: 110%;
    margin-bottom: 24px;
  }
`

// export const Heading3New = styled.h1`
//   break-after: avoid;
//   break-inside: avoid;
//   color: black;
//   font-weight: 800;
//   margin-block-end: 0;
//   margin-block-start: 0;
//   margin-inline-end: 0;
//   margin-inline-start: 0;
//   box-sizing: border-box;
//   font-size: ${calculateFluidStyle(29, 33, 854, 1920)};
//   line-height: 100%;
//   margin-bottom: 40px;

//   @media screen and (max-width: 853px) {
//     font-size: ${calculateFluidStyle(22, 29, 320, 853)};
//     line-height: 110%;
//     margin-bottom: 24px;
//   }
// `

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

export const Intro = styled.p`
  color: black;
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  font-size: ${calculateFluidStyle(29, 32, 854, 1920)};
  line-height: 150%;
  margin-bottom: 80px;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(22, 29, 320, 853)};
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
  font-size: ${calculateFluidStyle(23, 26, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(18, 23, 320, 853)};
  }
`

export const ParagraphSmall = styled.p`
  color: black;
  font-weight: 400;
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  margin-bottom: 40px;
  line-height: 160%;
  font-size: ${calculateFluidStyle(17, 18, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(16, 17, 320, 853)};
  }
`

export const Quote = styled.blockquote`
  color: black;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  margin-bottom: 40px;
  line-height: 110%;
  font-size: ${calculateFluidStyle(35, 40, 854, 1920)};
  font-weight: 800;
  font-style: italic;
  quotes: '“' '”';
  margin: 0;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(24, 35, 320, 853)};
  }
`
