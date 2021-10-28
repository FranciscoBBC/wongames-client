import { render, screen, fireEvent } from '@testing-library/react'
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

  it('should render a normal price', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(/R\$ 235,00/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(screen.getByText(/R\$ 235,00/i)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)

    const oldPrice = screen.getByText(/R\$ 235,00/i)
    expect(oldPrice).toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(oldPrice).toHaveStyle({
      color: '#8F8F8F'
    })

    const newPrice = screen.getByText(/R\$ 200,00/i)
    expect(newPrice).not.toHaveStyle({ 'text-decoration': 'line-through' })
    expect(newPrice).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite={true} />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call a favorite event when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render with a ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="desconto"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/desconto/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })
})
