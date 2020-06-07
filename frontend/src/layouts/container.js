import React, { useState } from 'react'
import { Container, ContentArea  } from "./layoutStyle";


export const ContenArea = (props) => {
    return (
        <ContentArea bgColor='black'></ContentArea>
    )
}

export const StyleContainer = (props) => {

    return (
        <Container >
            <ContentArea >

            </ContentArea>
        </Container>
    )
}

