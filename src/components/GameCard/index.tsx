import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import React from 'react'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav
}: GameCardProps) => {
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
        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="remove from wishlist" />
          ) : (
            <FavoriteBorder aria-label="add to wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional={true}>{price}</S.Price>
          )}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
