import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Hero.style'

const theme={
    success:{
        background:"#4fcc78",
        color: "#ffffff"
    },
    danger:{
        background:"#df4261",
        color: "#ffffff"
    }
}

const Hero = ({color, title, subtitle}) => {
  return (
    <S.Hero style={theme[color]}>
        <h2>{title}</h2>    
        <p>{subtitle}</p>
    </S.Hero>
  )
}

Hero.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["success","danger"]),
}
Hero.defaultProps={
    color: "success",
}

export default Hero