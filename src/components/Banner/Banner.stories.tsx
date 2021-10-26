import Banner, { BannerProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: '/icon-192.png',
    title: 'banner image',
    subtitle: '<p>subtitulo do <strong>banner</strong></p>',
    buttonLabel: 'compre agora',
    buttonLink: 'games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const basic: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const withRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Banner {...args} />
  </div>
)

withRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
