import { css } from 'styled-components'
import { calculateFluidStyle } from './utils'

export const level1 = css`
  font-size: ${calculateFluidStyle(75, 96, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(32, 75, 320, 853)};
  }
`

export const level2 = css`
  font-size: ${calculateFluidStyle(59, 72, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(32, 59, 320, 853)};
  }
`

export const level3 = css`
  font-size: ${calculateFluidStyle(41, 48, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(28, 41, 320, 853)};
  }
`

export const level4 = css`
  font-size: ${calculateFluidStyle(35, 40, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(24, 35, 320, 853)};
  }
`

export const level5 = css`
  font-size: ${calculateFluidStyle(29, 32, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(22, 29, 320, 853)};
  }
`

export const level6 = css`
  font-size: ${calculateFluidStyle(25, 28, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(20, 25, 320, 853)};
  }
`

export const level7 = css`
  font-size: ${calculateFluidStyle(23, 26, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(18, 23, 320, 853)};
  }
`
export const level8 = css`
  font-size: ${calculateFluidStyle(17, 18, 854, 1920)};

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(16, 17, 320, 853)};
  }
`

export const genericHeadingStyle = css`
  break-after: avoid;
  break-inside: avoid;
  /* color: black; */
  font-weight: 800;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  box-sizing: border-box;
`

export const genericParagraphStyle = css`
  /* color: black; */
  font-weight: 400;
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
`
