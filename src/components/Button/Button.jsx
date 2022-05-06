import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Button.style'

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

const Button = ({type, color, children}) => {
  return (
    <S.Button style={theme[color]} type={type} onClick={()=>{window.alert(type)}}>{children}</S.Button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button","submit","reset"]),
    color: PropTypes.oneOf(["primary","success","danger"])
}
Button.defaultProps={
    type: "button",
    color: "primary",
}

export default Button