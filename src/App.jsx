import { useLayoutEffect, useRef, useState } from 'react'
import * as Styled from './App.style'

const getCurrentFontSize = (ref) =>
  window.getComputedStyle(ref, null).getPropertyValue('font-size')

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [typoSizes, setTypoSizes] = useState({
    h1: 0,
    intro: 0,
    paragraph: 0,
  })

  const headingRef = useRef()
  const introRef = useRef()
  const paragraphRef = useRef()

  useLayoutEffect(() => {
    const getSizes = () => {
      setScreenWidth(window.innerWidth)

      setTypoSizes({
        h1: getCurrentFontSize(headingRef.current),
        intro: getCurrentFontSize(introRef.current),
        paragraph: getCurrentFontSize(paragraphRef.current),
      })
    }

    if (headingRef.current) {
      setTypoSizes({
        h1: getCurrentFontSize(headingRef.current),
        intro: getCurrentFontSize(introRef.current),
        paragraph: getCurrentFontSize(paragraphRef.current),
      })
    }

    window.addEventListener('resize', getSizes)

    return () => {
      window.removeEventListener('resize', getSizes)
    }
  }, [])

  return (
    <>
      <Styled.Wrapper>
        <Styled.MetadataTitleContainer>
          <h1>Meta</h1>
        </Styled.MetadataTitleContainer>
        <Styled.MetadataContainer>
          <p>{`Schermbreedte: ${screenWidth}px`}</p>
          <p>Fontgroottes:</p>
          <dl>
            <dt>Heading level 1</dt>
            <dd>{typoSizes.h1}</dd>
            <dt>Intro</dt>
            <dd>{typoSizes.intro}</dd>
            <dt>Paragraph</dt>
            <dd>{typoSizes.paragraph}</dd>
          </dl>
        </Styled.MetadataContainer>
        <Styled.HeadingAndIntroContainer>
          <Styled.Heading1 ref={headingRef}>
            Voorlopige uitslag Provinciale Statenverkiezingen 2023
          </Styled.Heading1>
          <Styled.Intro ref={introRef}>
            GroenLinks blijft in Amsterdam de grootste partij. Dat blijkt na het
            tellen van 100 procent van de stemmen. In deze voorlopige uitslag
            van de verkiezingen voor de Provinciale Staten staat de partij op
            18,3 procent. Dat is minder dan bij de verkiezingen van 2019, toen
            de partij 23,8 procent van de stemmen kreeg.
          </Styled.Intro>
        </Styled.HeadingAndIntroContainer>
        <Styled.TextContainer>
          <Styled.Paragraph ref={paragraphRef}>
            De verkiezingen zijn, landelijk gezien, uitgelopen op aanzienlijke
            verschuivingen in electorale voorkeur, met name aan de
            rechts-conservatieve kant van het politieke spectrum. BBB is de
            grote winnaar, FvD de grote verliezer. Ja21 wint ook, terwijl VVD en
            PVV verliezen; het CDA verliest bijna de helft van zijn electoraat,
            maar ook SGP en CU verliezen.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Aan de linkerkant van het politiek spectrum zijn de verschuivingen
            veel minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer
            even groot. D66 en SP verliezen licht terwijl de Partij voor de
            Dieren en Volt juist kiezers winnen.
          </Styled.Paragraph>
        </Styled.TextContainer>
      </Styled.Wrapper>
    </>
  )
}

export default App
