import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import Radio from '.'

describe('<Radio />', () => {
  it('should render a white label', () => {
    const { container } = renderWithTheme(
      <Radio label="label radio" labelFor="check" value="radio value" />
    )

    expect(screen.getByLabelText(/label radio/i)).toBeInTheDocument()
    expect(screen.getByText(/label radio/i)).toBeInTheDocument()
    expect(screen.getByText(/label radio/i)).toHaveStyle({ color: '#FAFAFA' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a black label', () => {
    renderWithTheme(
      <Radio label="label radio" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/label radio/i)).toBeInTheDocument()
    expect(screen.getByText(/label radio/i)).toHaveStyle({ color: '#030517' })
  })

  it('should render without a label', () => {
    renderWithTheme(<Radio />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.queryByLabelText(/label radio/i)).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Radio
        label="label radio"
        labelFor="check"
        value="radio value"
        onCheck={onCheck}
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText(/label radio/i))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('radio value')
  })

  it('Should be accessible with tab', () => {
    renderWithTheme(
      <Radio label="label radio" labelFor="check" value="radio value" />
    )

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByLabelText(/label radio/i)).toHaveFocus()
  })
})
