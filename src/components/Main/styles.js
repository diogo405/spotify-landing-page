import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    align-items: center;
  }
`
export const Headline = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: white;

  @media(max-width: 768px) {
    font-size: 28px;
  }
`
export const Description = styled.h2`
  font-size: 14px;
  color: var(--pink); 
  margin: 30px 0;
`
