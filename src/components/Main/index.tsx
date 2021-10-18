import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'react avançado',
  description = 'Typescript, ReactJs, Nextjs e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="logo.svg"
        alt="Imagem de um átomo e React Avançado ao lado."
      ></S.Logo>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="hero-illustration.svg"
        alt="um desenvolvedor de frente para a tela com codigo"
      ></S.Illustration>
    </S.Wrapper>
  )
}

export default Main
