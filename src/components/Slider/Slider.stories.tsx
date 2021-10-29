import Slider, { SliderProps, SliderSettings } from '.'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const horizontal: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)
export const vertical: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)

horizontal.args = {
  settings: settings
}
vertical.args = {
  settings: {
    ...settings,
    vertical: true,
    verticalSwiping: true,
    infinite: false
  }
}
