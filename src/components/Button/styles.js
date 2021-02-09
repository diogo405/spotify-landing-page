import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 15px 20px;
  text-transform: uppercase;
  color: var(--darkBlue);
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  background: var(--green);
  width: fit-content;
  cursor: pointer;
  ${props => props.secondary && `
    background: white;
    color: var(--darkBlue);
  `}
`
