import React from 'react'
import TopNavbar from './layouts/navbar'
import { Container } from 'reactstrap';

export const App = (props) => {

    return (
        <div>
            <TopNavbar></TopNavbar>
            <div className="content_area">
                <Container className="themed-container">
                    <h1>This is content</h1>
                </Container>
            </div>
            
            <footer class="container-fluid navbar-fixed-bottom">
                <p>This is footer</p>
            </footer>
        </div>
    )
}