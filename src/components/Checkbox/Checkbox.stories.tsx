import Checkbox, { CheckboxProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />
