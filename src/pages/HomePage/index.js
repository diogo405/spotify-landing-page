import React from 'react'
import {Wrapper, Grid} from './styles'
import Topbar from '../../components/Topbar'
import Main from '../../components/Main'
import Pricing from '../../components/Pricing'
import App from '../../components/App'

const Component = () => {
  return (
    <Wrapper>
      <Topbar />
      <Grid>
        <Main />
        <App />
        <Pricing />
      </Grid>
    </Wrapper>
  )
}

export default Component
