import { FavoriteBorder } from '@styled-icons/material'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import React from 'react'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton role="button">
          <FavoriteBorder aria-label="add to wishlist" />
        </S.FavButton>
        <S.BuyBox>
          <S.Price>{price}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
