import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 80px;
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

const currentH1 = css`
  font-size: clamp(2rem, calc(2rem + 0.03 * (100vw - 20rem)), 5rem);
  line-height: clamp(
    2.1875rem,
    calc(2.1875rem + 0.028125 * (100vw - 20rem)),
    5rem
  );
`

const suggestedH1 = css`
  font-size: clamp(
    4.444375rem,
    4.444375rem + 2.2225 * (100vw - 51.25rem) / 68.75,
    6.666875rem
  );
  line-height: 100%;

  @media screen and (max-width: 819px) {
    font-size: clamp(
      2rem,
      2rem + 2.368125 * (100vw - 23.4375rem) / 27.75,
      4.368125rem
    );
    line-height: 110%;
  }
`

const currentMarginH1 = css`
  margin-bottom: 40px;

  @media screen and (max-width: 819px) {
    margin-bottom: 24px;
  }
`

const fluidMarginH1 = css`
  margin-bottom: clamp(1.5rem, calc(1.5rem + 0.01 * (100vw - 20rem)), 2.5rem);
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

  ${({ option }) => (option === 'current' ? currentH1 : suggestedH1)}

  ${({ marginSelected }) => (marginSelected ? fluidMarginH1 : currentMarginH1)}
`

const currentIntro = css`
  font-size: clamp(
    1.375rem,
    calc(1.375rem + 0.005 * (100vw - 20rem)),
    1.875rem
  );
  line-height: clamp(
    2.1875rem,
    calc(2.1875rem + 0.00625 * (100vw - 20rem)),
    2.8125rem
  );
`

const suggestedIntro = css`
  font-size: clamp(
    1.625rem,
    1.625rem + 0.875 * (100vw - 51.25rem) / 68.75,
    2.5rem
  );
  line-height: 150%;

  @media screen and (max-width: 819px) {
    font-size: clamp(
      1.375rem,
      1.375rem + 1.625 * (100vw - 23.4375rem) / 27.75,
      3rem
    );
    line-height: 160%;
  }
`

const currentMarginIntro = css`
  margin-bottom: 80px;

  @media screen and (max-width: 819px) {
    margin-bottom: 56px;
  }
`

const fluidMarginIntro = css`
  margin-bottom: clamp(3.5rem, calc(3.5rem + 0.015 * (100vw - 20rem)), 5rem);
`

export const Intro = styled.p`
  color: black;
  font-size: clamp(
    1.125rem,
    calc(1.125rem + 0.00375 * (100vw - 20rem)),
    1.5rem
  );
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  ${({ marginSelected }) =>
    marginSelected ? fluidMarginIntro : currentMarginIntro}

  ${({ option }) => (option === 'current' ? currentIntro : suggestedIntro)}
`
const currentParagraph = css`
  font-size: clamp(
    1.125rem,
    calc(1.125rem + 0.00375 * (100vw - 20rem)),
    1.5rem
  );
`

const suggestedParagraph = css`
  font-size: clamp(
    1.333125rem,
    1.333125rem + 0.1668750000000001 * (100vw - 51.25rem) / 68.75,
    1.5rem
  );

  @media screen and (max-width: 819px) {
    font-size: clamp(
      1.125rem,
      1.125rem + 1.3318750000000001 * (100vw - 23.4375rem) / 27.75,
      2.456875rem
    );
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
  ${({ option }) =>
    option === 'current' ? currentParagraph : suggestedParagraph}
`

const currentButton = css`
  font-size: clamp(
    1.125rem,
    calc(1.125rem + 0.00375 * (100vw - 20rem)),
    1.5rem
  );
`

const suggestedButton = css`
  font-size: clamp(
    1.333125rem,
    1.333125rem + 0.1668750000000001 * (100vw - 51.25rem) / 68.75,
    1.5rem
  );

  @media screen and (max-width: 819px) {
    font-size: clamp(
      1.125rem,
      1.125rem + 1.3318750000000001 * (100vw - 23.4375rem) / 27.75,
      2.456875rem
    );
  }
`

export const Button = styled.button`
  line-height: 160%;
  background-color: rgb(0, 70, 153);
  color: white;
  padding: 8px 16px;
  font-weight: 400;
  white-space: nowrap;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  margin-top: 0px;
  margin-bottom: 120px;

  ${({ option }) => (option === 'current' ? currentButton : suggestedButton)}
  ${({ paddingSelected }) => paddingSelected && `padding: 0.3333em 0.6666em;`}
`

export const Card = styled.a`
  display: block;
  height: fit-content;
  text-decoration: none;
  overflow: hidden;
  grid-area: auto / auto / auto / span 4;
  margin-bottom: 40px;

  @media screen and (max-width: 819px) {
    grid-template-columns: 1fr;
  }
`

const currentCardHeading = css`
  font-size: clamp(
    1.125rem,
    1.125rem + (0.375 * (100vw - 20rem)) / 100,
    1.5rem
  );
  line-height: clamp(
    1.5625rem,
    1.5625rem + (0.375 * (100vw - 20rem)) / 100,
    1.9375rem
  );
`

const suggestedCardHeading = css`
  font-size: clamp(
    1.333125rem,
    1.333125rem + 0.1668750000000001 * (100vw - 51.25rem) / 68.75,
    1.5rem
  );
  line-height: 120%;

  @media screen and (max-width: 819px) {
    font-size: clamp(
      1.125rem,
      1.125rem + 1.3318750000000001 * (100vw - 23.4375rem) / 27.75,
      2.456875rem
    );
    line-height: 140%;
  }
`

export const CardHeading = styled(Heading1)`
  margin-bottom: 8px;
  ${({ option }) =>
    option === 'current' ? currentCardHeading : suggestedCardHeading}
`

const currentCardText = css`
  font-size: clamp(1rem, 1rem + (0.125 * (100vw - 20rem)) / 100, 1.125rem);
  line-height: clamp(
    1.5rem,
    1.5rem + (0.3125 * (100vw - 20rem)) / 100,
    1.8125rem
  );
`

const suggestedCardText = css`
  font-size: clamp(1rem, 1rem + 0.5 * (100vw - 51.25rem) / 68.75, 1.5rem);
  line-height: 160%;

  @media screen and (max-width: 819px) {
    font-size: clamp(
      1rem,
      1rem + 1.1837499999999999 * (100vw - 23.4375rem) / 27.75,
      2.18375rem
    );
    line-height: 150%;
  }
`

export const CardText = styled(Paragraph)`
  margin-bottom: 4px;
  ${({ option }) =>
    option === 'current' ? currentCardText : suggestedCardText}
`
