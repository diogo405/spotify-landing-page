import React from 'react'
import {Wrapper, Title, Description} from './styles'
import Button from '../Button'

const Pricing = () => {
  return (
    <Wrapper>
      <Title>Try Premium free for 1 month.</Title>
      <Description>Play millions of songs ad-free, and offline.</Description>
      <Button secondary>See Pricing</Button>
    </Wrapper>
  )
}

export default Pricing
