import styled from 'styled-components'
import { calculateFluidStyle } from './utils'
import {
  genericHeadingStyle,
  genericParagraphStyle,
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
} from './Typography.style'

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
  ${genericHeadingStyle}
  ${level2}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Heading2 = styled.h1`
  ${genericHeadingStyle}
  ${level3}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Heading3 = styled.h1`
  ${genericHeadingStyle}
  ${level4}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
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
  ${genericHeadingStyle}
  ${level6}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Intro = styled.p`
  ${genericParagraphStyle}
  ${level5}

  line-height: 150%;
  margin-bottom: 80px;

  @media screen and (max-width: 853px) {
    line-height: 160%;
    margin-bottom: 56px;
  }
`

export const Paragraph = styled.p`
  ${genericParagraphStyle}
  ${level7}

  margin-bottom: 40px;
  line-height: 160%;
`

export const ParagraphSmall = styled.p`
  ${genericParagraphStyle}
  ${level8}

  margin-bottom: 40px;
  line-height: 160%;
`

export const Quote = styled.blockquote`
  ${level4}

  color: black;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  margin-bottom: 40px;
  line-height: 110%;
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
`
