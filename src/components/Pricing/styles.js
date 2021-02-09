import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media(max-width: 768px) {
    align-items: center;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: white;
`
export const Description = styled.h2`
  margin: 30px 0;
  font-size: 14px;
  color: var(--pink);
  line-height: 18px;
`
