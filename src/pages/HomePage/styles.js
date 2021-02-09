import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1024px;
  width: 90%;
  box-sizing: border-box;
  padding: 0 50px 50px 50px;
  margin: 0 auto;
  
  @media(max-width: 768px) {
    padding: 0 10px 50px 10px;
  }
`
export const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-row-gap: 70px;

  & > div:nth-child(2) {
    grid-row: span 2;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 100px;
  }
`
