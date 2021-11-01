import Menu from 'components/Menu'
import { Container } from 'components/Container'
import React from 'react'
import * as S from './styles'
import Footer from 'components/Footer'
import Heading from 'components/Heading'

const Home = () => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
      </Container>
      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
