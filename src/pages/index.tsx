import HomePage, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import HighLightMock from 'components/Highlight/mock'

export default function Home(props: HomeTemplateProps) {
  return <HomePage {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: HighLightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: HighLightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: HighLightMock
    }
  }
}
