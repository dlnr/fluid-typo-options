import styled from 'styled-components'

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
  font-size: clamp(
    4.444375rem,
    4.444375rem + 2.2225 * (100vw - 51.25rem) / 68.75,
    6.666875rem
  );
  line-height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 819px) {
    font-size: clamp(
      2rem,
      2rem + 2.368125 * (100vw - 23.4375rem) / 27.75,
      4.368125rem
    );
    line-height: 110%;
    margin-bottom: 24px;
  }
`

export const Intro = styled.p`
  color: black;
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  font-size: clamp(
    1.625rem,
    1.625rem + 0.875 * (100vw - 51.25rem) / 68.75,
    2.5rem
  );
  line-height: 150%;
  margin-bottom: 80px;

  @media screen and (max-width: 819px) {
    font-size: clamp(
      1.375rem,
      1.375rem + 1.625 * (100vw - 23.4375rem) / 27.75,
      3rem
    );
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
