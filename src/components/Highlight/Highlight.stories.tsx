import Highlight, { HighlightProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'heading 1',
    subtitle: 'heading 2',
    buttonLabel: 'buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/background_highlight.jpg'
  }
} as Meta

export const basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/icon-512.png'
}
