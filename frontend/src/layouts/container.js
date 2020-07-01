import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'
import { HeaderNav } from './headerNav';
import { Footer } from './footer';
import { RecruitArea, OfferArea, CompanyPage, ResumePage, ApplicationArea } from '../pages/index'

const Container = () => {
    return (
        <Fragment>
            <HeaderNav/>
            <div className="contentArea">
                <Route path="/" exact={true} component={RecruitArea}/>
                <Route path="/company" component={CompanyPage}/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Container;