import React from 'react';
import { HeaderNav } from './headerNav';
import { Content } from './content';
import { Footer } from './footer';

const Container = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default Container;