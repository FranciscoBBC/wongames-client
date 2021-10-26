import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'

const props = {
  img: '/icon-192.png',
  title: 'test title',
  subtitle: 'test subtitle',
  buttonLabel: 'test button label',
  buttonLink: 'test button link'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    // render img
    expect(screen.getByLabelText(/test title/i)).toBeInTheDocument()
    // render title
    expect(
      screen.getByRole('heading', { name: /test title/i })
    ).toBeInTheDocument()
    // render subtitle
    expect(
      screen.getByRole('heading', { name: /test subtitle/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="my ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
