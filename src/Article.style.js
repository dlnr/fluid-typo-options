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
  grid-area: auto / 3 / auto / span 8;

  @media screen and (max-width: 720px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const TextContainer = styled.div`
  grid-area: auto / 4 / auto / span 6;

  @media screen and (max-width: 720px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const Heading1 = styled.h1`
  ${genericHeadingStyle}
  ${level1}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 720px) {
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Heading2 = styled.h2`
  ${genericHeadingStyle}
  ${level2}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 720px) {
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Heading3 = styled.h3`
  ${genericHeadingStyle}
  ${level3}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 720px) {
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Heading4 = styled.h4`
  ${genericHeadingStyle}
  ${level4}

  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 720px) {
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Intro = styled.p`
  ${genericParagraphStyle}

  line-height: 150%;
  margin-bottom: 80px;

  @media screen and (max-width: 720px) {
    line-height: 160%;
    margin-bottom: 56px;
  }
`

export const Paragraph = styled.p`
  ${genericParagraphStyle}

  margin-bottom: 40px;
  line-height: 160%;
`

export const ParagraphSmall = styled.p`
  ${genericParagraphStyle}

  margin-bottom: 40px;
  line-height: 160%;
`

export const Quote = styled.blockquote`
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
