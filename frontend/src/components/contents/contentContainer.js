import React from 'react'
import styled from 'styled-components'


const Style = styled.div`
    background-color: #f1f1f1;
    paddingt: 20px 50px 20px 50px;
    
`


const ContentContainer = (props) => {
    return (
        <>
            <Style>
                <h1>{props.content}</h1>
            </Style>
        </>
    )
}

export default ContentContainer