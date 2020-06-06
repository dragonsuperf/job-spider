import React, { useState } from 'react'
import { Container, ContentArea  } from "../../styles/pageStyle";


export const ContenArea = (props) => {
    return (
        <ContentArea bgColor='black'></ContentArea>
    )
}

export const StyleContainer = (props) => {

    // const [bgColor, setBgColor] = useState(props.bgColor)
    return (
        <Container >
            <ContentArea ></ContentArea>
        </Container>
    )
}

