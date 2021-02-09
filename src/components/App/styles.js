import styled, {keyframes} from 'styled-components'

const fluctuate = keyframes`
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-5px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0 0 100px;
  position: relative;

  @media(max-width: 768px) {
    padding: 0;
  }
`
export const Icon = styled.svg`
  padding: 20px;
  background: var(--green);
  border-radius: 10px;
  width: 50px;
  height: 50px;
`
export const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-top: 30px;
`
export const Subtitle = styled.h3`
  font-size: 16px;
  color: var(--pink);
  margin: 20px 0;
`
export const Price = styled.span`
  font-size: 22px;
  color: white;
`
export const Period = styled.span`
  font-size: 14px;
  color: white;
`
export const Avatars = styled.div`
  & > div {
    box-shadow :0px 1px 10px -1px var(--pink);
    animation-name: ${fluctuate};
    animation-duration: 4s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }
  & > div:nth-child(1) {
    position: absolute;
    top: 30px;
    left: calc(50% + 25px);
    transform: translateX(-50%);
    animation-delay: 0.15s;
    animation-direction: reverse;
  }
  & > div:nth-child(2) {
    position: absolute;
    top: 80px;
    right: 10px;
    animation-delay: 0.25s;
  }
  & > div:nth-child(3) {
    position: absolute;
    top: 80px;
    left: 140px;
    animation-delay: 0.35s;
    animation-direction: reverse;
  }
  & > div:nth-child(4) {
    position: absolute;
    top: 110px;
    left: 300px;
    animation-delay: 0.75s;
  }
  & > div:nth-child(5) {
    position: absolute;
    top: 0;
    left: 140px;
    animation-delay: 0.5s;
  }
  & > div:nth-child(6) {
    position: absolute;
    top: 20px;
    left: 260px;
    animation-delay: 0.35s;
    animation-direction: reverse;
  }
  & > div:nth-child(7) {
    position: absolute;
    top: 20px;
    right: 80px;
  }
  & > div:nth-child(8) {
    position: absolute;
    top: 80px;
    right: 190px;
    animation-delay: 0.8s;
  }
  & > div:nth-child(9) {
    position: absolute;
    top: 160px;
    right: 120px;
    animation-delay: 0.2s;
    animation-direction: reverse;
  }
  & > div:nth-child(10) {
    position: absolute;
    top: 190px;
    left: 220px;
    animation-delay: 0.15s;
  }

  @media(max-width: 1024px) {
    & > div:nth-child(8) {
      display: none;
    }
  }

  @media(max-width: 992px) {
    & > div:nth-child(4), & > div:nth-child(6) {
      display: none;
    }
  }

  @media(max-width: 768px) {
    & > div:nth-child(10) {
      left: 100px;
    }
    & > div:nth-child(10) {
      left: 100px;
    }
    & > div:nth-child(5) {
      left: 50px;
    }
    & > div:nth-child(3) {
      left: 130px;
    }
  }

  @media(max-width: 576px) {
    & > div {
      display: none;
    }
  }
`
