import React from 'react';
import { Route } from 'react-router-dom'
import { HeaderNav } from './headerNav';
// import { Content } from './content';
import { Footer } from './footer';
import { RecruitArea, OfferArea, CompaniesArea, ResumeArea, ApplicationArea } from '../pages/index'

const Container = () => {
    return (
        <div>
            <HeaderNav/>
            <div className="contentArea">
                <Route path="/" exact={true} component={RecruitArea}/>
                <Route path="/company" component={CompaniesArea}/>
                <Route path="/offer" component={OfferArea}/>
                <Route path="/application" component={ApplicationArea}/>
                <Route path="/resume" component={ResumeArea}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Container;