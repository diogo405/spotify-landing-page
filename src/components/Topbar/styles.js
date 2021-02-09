import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`
export const Logo = styled.svg`
  fill: white;
  width: 30px
  height: 30px
`
export const Container = styled.ul`
  display: flex;
  & > li:last-child {
    margin-right: 0;
  }

  @media(max-width: 768px) {
    & > li:nth-child(2), & > li:nth-child(3) {
      display: none;
    }
  }
`
export const Link = styled.li`
  font-size: 14px;
  color: white;
  margin-right: 40px;
  cursor: pointer;
  ${props => props.highlight && `
    color: var(--green);
  `}
`
