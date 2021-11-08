import Checkbox, { CheckboxProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const basic: Story<CheckboxProps> = (args) => {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <Checkbox isChecked {...args} />
      </div>
      <div style={{ padding: '10px' }}>
        <Checkbox {...args} />
      </div>
      <div style={{ padding: '10px' }}>
        <Checkbox {...args} />
      </div>
    </>
  )
}
