import { css } from 'styled-components'

// Aprox. Content container on 1440 (where we would like the font to be at the max size) is ~ 900px
// 900px / 16px = 56.25em (assuming body font size will remain default)
// Max Container size 1920 (of stop bij 1440)
// 1920 / 16 = 120em
// 1440 / 16 = 90em

export const level1 = css`
  // font-size: clamp(32px, 4.1667vw, 80px);
  font-size: clamp(2em, calc(5 / 90 * 100vw), 5em);
`

export const level2 = css`
  // font-size: clamp(28px, 2.9167vw, 56px);
  font-size: clamp(1.75em, calc(3.5 / 90 * 100vw), 3.5em);
`

export const level3 = css`
  // font-size: clamp(24px, 2.0835vw, 40px);
  font-size: clamp(1.5em, calc(2.5 / 90 * 100vw), 2.5em);
`

export const level4 = css`
  // font-size: clamp(22px, 1.6669vw, 32px);
  font-size: clamp(1.375em, calc(2 / 90 * 100vw), 2em);
`

export const level5 = css`
  // font-size: clamp(18px, 1.25vw, 24px);
  font-size: clamp(1.125em, calc(1.5 / 90 * 100vw), 1.5em);
`

export const level6 = css`
  // font-size: clamp(16px, 0.9373vw, 18px);
  font-size: clamp(1em, calc(1.125 / 90 * 100vw), 1.125em);
`

export const level7 = css`
  // font-size: clamp(18px, 1.25vw, 24px);
  font-size: clamp(1.125em, calc(1.5 / 90 * 100vw), 1.5em);
`
export const level8 = css`
  // font-size: clamp(18px, 1.25vw, 24px);
  font-size: clamp(1.125em, calc(1.5 / 90 * 100vw), 1.5em);
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

  // font-size: clamp(18px, 1.25vw, 24px);
  font-size: clamp(1.125em, calc(1.5 / 90 * 100vw), 1.5em);
`
