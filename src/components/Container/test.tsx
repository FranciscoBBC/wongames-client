import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstElementChild).toHaveStyle({
      maxWidth: theme.grid.container
    })

    expect(container.firstChild).toMatchInlineSnapshot(` `)
  })
})
