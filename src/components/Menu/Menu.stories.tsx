import Menu, { MenuProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const mobile: Story<MenuProps> = (args) => <Menu {...args} />
export const desktop: Story<MenuProps> = (args) => <Menu {...args} />

mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}

desktop.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
