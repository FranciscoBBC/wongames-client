import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

export type MediaMatchProps = {
  greaterThen?: keyof DefaultBreakpoints
  lessThen?: keyof DefaultBreakpoints
}

const mediaMatchModifiers = {
  lessThen: (size: keyof DefaultBreakpoints) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,
  greaterThen: (size: keyof DefaultBreakpoints) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThen, greaterThen }) => css`
    display: none;

    ${!!lessThen && mediaMatchModifiers.lessThen(lessThen)}
    ${!!greaterThen && mediaMatchModifiers.greaterThen(greaterThen)}
  `}
`
