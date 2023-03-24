import { useLayoutEffect, useRef, useState } from 'react'
import * as Styled from './App.style'

const descriptions = {
  current:
    'Huidige implementatie op onderzoek.amsterdam.nl. Typografie schaalt linear van 320px schermbreedte naar 1920px schermbreedte.',
  suggested:
    'Implementatie zoals beschreven in tabel van Fabrique. Typografie schaalt getrapt, linear van 375px schermbreedte naar 819px, en dan weer linear van 820px naar 1920px. Line height klapt om bij breekpunt? Of schaalt ook?',
}

const paddingDesc = {
  static:
    'Ruimte binnen componenten (padding) is statisch, in stappen van 8px. Is alleen te zien bij de button.',
  relative:
    'Ruimte binnen componenten (padding) is relatief aan de font size van de tekst in het component. Is alleen te zien bij de button.',
}

const marginDesc = {
  static:
    'Ruimte tussen componenten (margin) is statisch, in stappen van 8px. Na het breekpunt verandert de margin in 1x van de ene naar de andere waarde.',
  relative:
    'Ruimte tussen componenten (margin) schaalt linear van de kleinste naar de grootste waarde. Tussen de paragrafen, onder de button en in de card zie je geen verschil, want de margins blijven daar hetzelfde.',
}

const getCurrentFontSize = (ref) =>
  window.getComputedStyle(ref, null).getPropertyValue('font-size')

function App() {
  const [selected, setSelected] = useState('current')
  const [paddingSelected, setPaddingSelected] = useState(false)
  const [marginSelected, setMarginSelected] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [typoSizes, setTypoSizes] = useState({
    h1: 0,
    intro: 0,
    paragraph: 0,
    button: 0,
  })

  const headingRef = useRef()
  const introRef = useRef()
  const paragraphRef = useRef()
  const buttonRef = useRef()

  useLayoutEffect(() => {
    const getSizes = () => {
      setScreenWidth(window.innerWidth)

      setTypoSizes({
        h1: getCurrentFontSize(headingRef.current),
        intro: getCurrentFontSize(introRef.current),
        paragraph: getCurrentFontSize(paragraphRef.current),
        button: getCurrentFontSize(buttonRef.current),
      })
    }

    if (headingRef.current) {
      setTypoSizes({
        h1: getCurrentFontSize(headingRef.current),
        intro: getCurrentFontSize(introRef.current),
        paragraph: getCurrentFontSize(paragraphRef.current),
        button: getCurrentFontSize(buttonRef.current),
      })
    }

    window.addEventListener('resize', getSizes)

    return () => {
      window.removeEventListener('resize', getSizes)
    }
  }, [selected])

  return (
    <>
      <Styled.Wrapper>
        <Styled.MetadataTitleContainer>
          <h1>Meta</h1>
        </Styled.MetadataTitleContainer>
        <Styled.MetadataContainer>
          <label htmlFor="option">Kies een optie </label>{' '}
          <select
            name="opties"
            id="option"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="current">Huidige implementatie</option>
            <option value="suggested">Implementatie Fabrique</option>
          </select>
          <p>{descriptions[selected]}</p>
          <label htmlFor="padding">
            Relatieve spacing binnen componenten (spacing)
          </label>
          <input
            type="checkbox"
            id="padding"
            name="padding"
            checked={paddingSelected}
            onChange={() => setPaddingSelected(!paddingSelected)}
          />
          <p>{paddingDesc[paddingSelected ? 'relative' : 'static']}</p>
          <label htmlFor="margin">
            Relatieve spacing tussen componenten (margin)
          </label>
          <input
            type="checkbox"
            id="margin"
            name="margin"
            checked={marginSelected}
            onChange={() => setMarginSelected(!marginSelected)}
          />
          <p>{marginDesc[marginSelected ? 'relative' : 'static']}</p>
          <p>{`Schermbreedte: ${screenWidth}px`}</p>
          <p>Fontgroottes:</p>
          <dl>
            <dt>Heading level 1</dt>
            <dd>{typoSizes.h1}</dd>
            <dt>Intro</dt>
            <dd>{typoSizes.intro}</dd>
            <dt>Paragraph</dt>
            <dd>{typoSizes.paragraph}</dd>
            <dt>Button</dt>
            <dd>{typoSizes.button}</dd>
          </dl>
        </Styled.MetadataContainer>
        <Styled.HeadingAndIntroContainer>
          <Styled.Heading1
            option={selected}
            ref={headingRef}
            marginSelected={marginSelected}
          >
            Voorlopige uitslag Provinciale Statenverkiezingen 2023
          </Styled.Heading1>
          <Styled.Intro
            option={selected}
            ref={introRef}
            marginSelected={marginSelected}
          >
            GroenLinks blijft in Amsterdam de grootste partij. Dat blijkt na het
            tellen van 100 procent van de stemmen. In deze voorlopige uitslag
            van de verkiezingen voor de Provinciale Staten staat de partij op
            18,3 procent. Dat is minder dan bij de verkiezingen van 2019, toen
            de partij 23,8 procent van de stemmen kreeg.
          </Styled.Intro>
        </Styled.HeadingAndIntroContainer>
        <Styled.TextContainer>
          <Styled.Paragraph option={selected} ref={paragraphRef}>
            De verkiezingen zijn, landelijk gezien, uitgelopen op aanzienlijke
            verschuivingen in electorale voorkeur, met name aan de
            rechts-conservatieve kant van het politieke spectrum. BBB is de
            grote winnaar, FvD de grote verliezer. Ja21 wint ook, terwijl VVD en
            PVV verliezen; het CDA verliest bijna de helft van zijn electoraat,
            maar ook SGP en CU verliezen.
          </Styled.Paragraph>
          <Styled.Paragraph option={selected}>
            Aan de linkerkant van het politiek spectrum zijn de verschuivingen
            veel minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer
            even groot. D66 en SP verliezen licht terwijl de Partij voor de
            Dieren en Volt juist kiezers winnen.
          </Styled.Paragraph>
          <Styled.Button
            option={selected}
            ref={buttonRef}
            paddingSelected={paddingSelected}
          >
            Download PDF (1 MB)
          </Styled.Button>
        </Styled.TextContainer>
        <Styled.Card option={selected}>
          <Styled.CardText option={selected}>Artikel</Styled.CardText>
          <Styled.CardHeading option={selected}>
            Onveiligheid toegenomen in 2022
          </Styled.CardHeading>
          <Styled.CardText option={selected}>
            De bij de politie geregistreerde criminaliteit is in de
            Veiligheidsregio Amsterdam-Amstelland gestegen in 2022 ten opzichte
            van 2021. Dat blijkt uit de update van de Veiligheidsindexen.
          </Styled.CardText>
        </Styled.Card>
        <Styled.Card option={selected}>
          <Styled.CardText option={selected}>Publicatie</Styled.CardText>
          <Styled.CardHeading option={selected}>
            Schuldenmonitor 2022
          </Styled.CardHeading>
          <Styled.CardText option={selected}>
            In 2021 hebben naar schatting ruim twee op de tien Amsterdammers
            schulden en/of betalingsachterstanden. Voor een op de tien gaat het
            om problematische schulden.
          </Styled.CardText>
        </Styled.Card>
        <Styled.Card option={selected}>
          <Styled.CardText option={selected}>Artikel</Styled.CardText>
          <Styled.CardHeading option={selected}>
            Toerisme in de Metropoolregio Amsterdam
          </Styled.CardHeading>
          <Styled.CardText option={selected}>
            Waar verblijven toeristen in de Metropoolregio Amsterdam? En hoeveel
            toeristen bezoeken de regio?
          </Styled.CardText>
        </Styled.Card>
      </Styled.Wrapper>
    </>
  )
}

export default App
