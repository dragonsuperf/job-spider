import styled from 'styled-components'

export const StyledNavItem = styled.li`
  display: inline;
  background-color: #d5d8dc;
  border: 1px solid black;
  margin: 10px;
  padding: 3px;
`

export const StyledNavbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border: 1px solid black;
  padding: 5px;
  margin: 0px;
`

export const StyleFooter = styled.footer`
  margin: 0px;
  padding: 10px, 15%, 10px, 15%;
  background-color: #EBDEF0;
`

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