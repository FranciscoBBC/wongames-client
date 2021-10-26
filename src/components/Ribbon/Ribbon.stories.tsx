import Ribbon, { RibbonProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'best seller'
  },
  argTypes: {
    children: { type: 'string' }
  }
} as Meta

export const basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
