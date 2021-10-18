import Main from '.'
import { Story, Meta } from '@storybook/react'

interface IMain {
  title: string
  description: string
}

export default {
  title: 'Main',
  component: Main
} as Meta

const Template: Story<IMain> = (args) => <Main {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: 'react',
  description: 'descrição curso'
}
