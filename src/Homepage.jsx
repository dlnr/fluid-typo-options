import * as Styled from './Homepage.style'

const themes = [
  {
    label: 'Werk en inkomen',
    slug: '/thema/werk-en-inkomen',
  },
  {
    label: 'Cultuur en recreatie',
    slug: '/thema/cultuur-en-recreatie',
  },
  {
    label: 'Wonen',
    slug: '/thema/wonen',
  },
  {
    label: 'Openbare orde en veiligheid',
    slug: '/thema/openbare-orde-en-veiligheid',
  },
  {
    label: 'Ruimte en topografie',
    slug: '/thema/ruimte-en-topografie',
  },
  {
    label: 'Bevolking',
    slug: '/thema/bevolking',
  },
  {
    label: 'Bestuur',
    slug: '/thema/bestuur',
  },
  {
    label: 'Duurzaamheid en milieu',
    slug: '/thema/duurzaamheid-en-milieu',
  },
  {
    label: 'Onderwijs en jeugd',
    slug: '/thema/onderwijs-en-jeugd',
  },
  {
    label: 'Economie en toerisme',
    slug: '/thema/economie-en-toerisme',
  },
  {
    label: 'Verkeer',
    slug: '/thema/verkeer',
  },
  {
    label: 'Zorg en welzijn',
    slug: '/thema/zorg-en-welzijn',
  },
]

const Homepage = () => {
  return (
    <>
      <Styled.TwelveColumn>
        <Styled.Hero>Onderzoek en Statistiek</Styled.Hero>
      </Styled.TwelveColumn>
      <Styled.FourColumn>
        <Styled.Heading4>Thema’s</Styled.Heading4>
        <Styled.List>
          {themes.map(({ label }) => (
            <li>
              <Styled.Link href="/">{label}</Styled.Link>
            </li>
          ))}
        </Styled.List>
      </Styled.FourColumn>
    </>
  )
}

export default Homepage
