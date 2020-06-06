import styled from 'styled-components'
import React, { Component } from 'react';

export const Container = styled.div`
    background: ${props => props.bgColor || '#FDFEFE '};
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
`

export const ContentArea = styled(Container)`
    &&& { 
        background: #FEF9E7;
        margin: 0px 15% 0px 15%;
        position: static;
    }
`