import React from 'react';
import { Route } from 'react-router-dom'
import { HeaderNav } from './headerNav';
// import { Content } from './content';
import { Footer } from './footer';
import { RecruitArea, OfferArea, CompaniesArea, ResumeArea } from '../pages/index'

const Container = () => {
    return (
        <div>
            <HeaderNav/>
                <div>
                    <Route path="/" exact={true} component={RecruitArea}/>
                    <Route path="/company" component={CompaniesArea}/>
                    <Route path="/offer" component={OfferArea}/>
                    <Route path="/resume" component={ResumeArea}/>
                </div>
            <Footer/>
        </div>
    )
}

export default Container;