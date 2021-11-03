import Menu from 'components/Menu'
import { Container } from 'components/Container'
import React from 'react'
import * as S from './styles'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>
      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary" color="black">
            News
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>
      <S.SectionMostPopular>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </Container>
      </S.SectionMostPopular>
      <S.SectionUpcoming>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighlight} />
          <GameCardSlider items={upcommingMoreGames} />
        </Container>
      </S.SectionUpcoming>
      <S.SectionFreeGames>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>
          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </Container>
      </S.SectionFreeGames>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
