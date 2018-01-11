import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: url('icons/${props => props.iconURL}');
`

export const Button = ({title, onClick, icon}) => (
  <StyledButton
    className="toolbutton"
    title={title}
    onClick={onClick}
    iconURL={icon}
  />
)