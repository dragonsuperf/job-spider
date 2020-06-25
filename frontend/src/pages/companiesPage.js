import React, { Fragment } from "react";
import data from "../datas.json";
import CompanyTable from "../components/companyTables/companyTable";

const companyList = () => {
  let list = [];
  for (let i = 0; i < 12; i++) {
    let subList = [];
    for (let j = 0; j < 10; j++) {
      let multiple = i * 10;
      subList.push({
        company: data.companies[multiple + j],
        address: data.address[multiple + j],
      });
    }
    list.push(subList);
  }
  return list;
};

const CompanyPage = () => {
  const tmpList = companyList();

  return (
    <Fragment>
      <CompanyTable list={companyList()}></CompanyTable>
    </Fragment>
  );
};

export default CompanyPage;
