import Highlight, { HighlightProps } from '.'
import { Story, Meta } from '@storybook/react'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    ...item
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
