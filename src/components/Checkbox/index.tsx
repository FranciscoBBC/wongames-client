import React from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
}

const Checkbox = ({ label, labelFor = '' }: CheckboxProps) => {
  return (
    <S.Wrapper>
      <input type="checkbox" id={labelFor} />
      {!!labelFor && <label htmlFor={labelFor}>{label}</label>}
    </S.Wrapper>
  )
}

export default Checkbox
