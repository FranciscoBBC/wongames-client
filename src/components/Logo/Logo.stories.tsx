import Logo from '.'
import { Story, Meta } from '@storybook/react'
import { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const basic: Story<LogoProps> = (args) => <Logo {...args} />
