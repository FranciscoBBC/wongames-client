import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with primary collor', () => {
    renderWithTheme(<Ribbon>best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })
  it('should render with secondary collor', () => {
    renderWithTheme(<Ribbon color="secondary">best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })
  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon>best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })
  it('should render with small size', () => {
    renderWithTheme(<Ribbon size="small">best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
