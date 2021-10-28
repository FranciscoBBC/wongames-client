import GameCard, { GameCardProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'teste de titulo',
    developer: 'Rockstar Games',
    img: '/background_highlight.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
    favorite: false
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const basic: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'desconto',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
