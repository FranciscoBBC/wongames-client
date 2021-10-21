import Heading, { HeadingProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const basic: Story<HeadingProps> = (args) => <Heading {...args} />

basic.args = {
  children: 'basic'
}
