import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import HighLightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: HighLightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: HighLightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: HighLightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    //footer
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    //sections
    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument()

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByText(/heading 1/i)).toHaveLength(3)
  })
})
