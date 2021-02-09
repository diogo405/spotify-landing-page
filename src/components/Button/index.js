import React from 'react'
import {Wrapper} from './styles'

const Button = ({children, secondary = false}) => {
  return (
    <Wrapper secondary={secondary}>{children}</Wrapper>
  )
}

export default Button
