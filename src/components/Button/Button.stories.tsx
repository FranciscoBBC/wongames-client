import Button from '.'
import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const basic: Story = (args) => <Button {...args} />
export const withIcon: Story = (args) => <Button {...args} />
export const asLink: Story = (args) => <Button {...args} />

basic.args = {
  children: 'basic'
}

withIcon.args = {
  size: 'small',
  children: 'button with icon',
  icon: <AddShoppingCart />
}

asLink.args = {
  size: 'large',
  children: 'button as a link',
  as: 'a',
  href: '/link'
}
