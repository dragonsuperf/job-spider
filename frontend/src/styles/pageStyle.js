import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.bgColor || '#76448A'}; // 보라색
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`

export const ContentArea = styled(Container)` // 살색
    &&& { 
        background: #FEF9E7;
        margin: 0px 15% 0px 15%;
        position: static;
        height: auto;
    }
`