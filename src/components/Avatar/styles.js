import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-position: center center;
  background-size: cover;
`
