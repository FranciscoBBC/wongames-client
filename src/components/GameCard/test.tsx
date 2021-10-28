import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'teste de titulo',
  developer: 'Rockstar Games',
  img: '/background_highlight.jpg',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /teste de titulo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /teste de titulo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /teste de titulo/i })
    ).toHaveAttribute('src', props.img)

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
})
