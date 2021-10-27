import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Highlight from '.'

const props = {
  title: 'heading 1',
  subtitle: 'heading 2',
  buttonLabel: 'buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/background_highlight.jpg'
}

describe('<Highlight />', () => {
  it('should render the headings and buttons', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
    expect(container.firstElementChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/logo.svg" />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/logo.svg'
    )
  })
})
