import React from 'react'
import PropTypes from 'prop-types'
import {Wrapper} from './styles'

const Avatar = ({image, size}) => {
  return (
    <Wrapper size={size} style={{backgroundImage: `url(${image})`}} />
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
}
Avatar.defaultProps = {
  size: 50,
}

export default Avatar
