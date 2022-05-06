import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Block.style'

const theme={
    primary:{
        background:"#2693da",
        color: "#ffffff"
    },
    success:{
        background:"#49c774",
        color: "#ffffff"
    },
    danger:{
        background:"#f24667",
        color: "#ffffff"
    }
}

const Block = ({color, children}) => {
  return (
    <S.Block style={theme[color]}>{children}</S.Block>
  )
}

Block.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["primary","success","danger"]),
}
Block.defaultProps={
    color: "primary",
}

export default Block