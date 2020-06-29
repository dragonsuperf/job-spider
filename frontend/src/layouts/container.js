import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'
import { HeaderNav } from './headerNav';
// import { Content } from './content';
import { Footer } from './footer';
import { RecruitArea, OfferArea, CompanyPage, ResumePage, ApplicationArea } from '../pages/index'

const Container = () => {
    return (
        <Fragment>
            <HeaderNav/>
            <div className="contentArea">
                <Route path="/" exact={true} component={RecruitArea}/>
                <Route path="/company" component={CompanyPage}/>
                {/* <Route path="/offer" component={OfferArea}/>
                <Route path="/application" component={ApplicationArea}/>
                <Route path="/resume" component={ResumePage}/> */}
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Container;