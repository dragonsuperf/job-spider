import React from 'react'
import styled from 'styled-components'

const Style = styled.button`
    color: white;
    background-color: '#F39C12';
    &:hover {
        background-color: #F5B041;
    }
`

const NavButton = (props) => {
    return (
        <Style>{props.name}</Style>
    )
}



export default NavButton