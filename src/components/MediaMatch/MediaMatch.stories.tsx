import MediaMatch from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const desktop: Story = () => (
  <MediaMatch greaterThen="medium">only on desktop</MediaMatch>
)
export const mobile: Story = () => (
  <MediaMatch lessThen="medium">only on mobile</MediaMatch>
)

mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
