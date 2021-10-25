import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Footer from '.'

describe('<Footer />', () => {
  it('should render footer links', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the mobile footer', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByTestId('content-wrapper')).toHaveStyle({
      'grid-template-columns': 'repeat(2,1fr)'
    })
  })
  it('should render the desktop footer', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByTestId('content-wrapper')).toHaveStyleRule(
      'grid-template-columns',
      'repeat(4,1fr)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
