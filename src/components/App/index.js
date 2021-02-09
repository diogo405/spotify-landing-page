import React from 'react'
import {Wrapper, Icon, Title, Subtitle, Price, Period, Avatars} from './styles'
import Avatar from '../Avatar'
import drake from '../../assets/images/drake.jpeg'
import travis from '../../assets/images/travis.jpeg'
import be from '../../assets/images/be.jpeg'
import rhianna from '../../assets/images/rhianna.jpg'
import jay from '../../assets/images/jay.jpeg'
import justin from '../../assets/images/justin.jpeg'
import kanye from '../../assets/images/kanye.jpeg'
import iggy from '../../assets/images/iggy.jpg'
import eminem from '../../assets/images/eminem.jpg'
import taylor from '../../assets/images/taylor.jpeg'

const App = () => {
  return (
    <Wrapper>
      <Avatars>
        <Avatar image={drake} size={70} />
        <Avatar image={travis} size={70} />
        <Avatar image={be} size={70} />
        <Avatar image={rhianna} size={50} />
        <Avatar image={jay} size={30} />
        <Avatar image={taylor} size={40} />
        <Avatar image={kanye} size={40} />
        <Avatar image={eminem} size={30} />
        <Avatar image={justin} size={40} />
        <Avatar image={iggy} size={40} />
      </Avatars>
      <Icon
        viewBox="0 0 24 24"
        width="30px"
        height="30px"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
      </Icon>
      <Title>Spotify Music</Title>
      <Subtitle>Music for everyone</Subtitle>
      <Price>
        $ 8.99 <Period>/ month</Period>
      </Price>
    </Wrapper>
  )
}

export default App
