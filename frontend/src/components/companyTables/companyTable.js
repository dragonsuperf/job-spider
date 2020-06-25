import React, { Fragment } from "react";
import CompanyList from "./companyList";
import { Link } from "react-router-dom";
import {randomMinMax} from '../../utils/utilFunctions'

const CompanyCard = (props) => {
    const setLogo = (num) => `/images/logos/${randomMinMax(0, num)}.png`;
  return (
    <li className="company_card">
      <Link>
        <div className="company_section">
          <div className="company_logo">
            <img className="logo" src={setLogo(16)}></img>
          </div>
          <div className="company_info">
            <p className="company_info__name">{props.name}</p>
            <p className="company_info__address">{props.address}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

const CompanyTable = (props) => {
  const page = props.page;
  const companyList = () => {
    const list = [];
    for (let i = 0; i < 10; i = i + 2) {
      let companyPageList = props.list[i].concat(props.list[i + 1]);
      list.push(companyPageList);
    }
    const listItems = [];
    for (let i = 0; i < list.length; i++) {
      listItems.push(list[i]);
    }
    return listItems;
  };
  const listItems = companyList()[0].map((companies) => {
    return (
      <CompanyCard
        name={companies.company}
        address={companies.address}
      ></CompanyCard>
    );
  });

  return (
    <Fragment>
      <ul className="company_table">{listItems}</ul>
    </Fragment>
  );
};

export default CompanyTable;
