import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = (props) => {
  return (
    <li>
      <Link>
        <h1>{props.name}</h1>
        <h2>{props.address}</h2>
      </Link>
    </li>
  );
};

const CompanyList = (props) => {
  const companies = () => {
    const list = [];
    for (let i = 0; i < props.list; i++) {
      list.push({ companyName: props.list[i], companyAddress: props.list[i] });
    }
    return list;
  };

  console.log(companies());

  return (
    <ul>
      <h1>COMPANY</h1>
    </ul>
  );
};

export default CompanyList
