import Footer from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const basic: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
