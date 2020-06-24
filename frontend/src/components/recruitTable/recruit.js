import React, { useEffect, Fragment } from "react";

import Pagination from '../uiComponents/pagination'
import TagBox from '../tableComponents/tag'
import RecruitRow from '../tableComponents/recruitRow'

// api가 없어서 임시로 사용하는 데이터와 함수
import { randomMinMax } from '../../utils/utilFunctions'
import data from "../../datas.json";



export const RecuitTable = props => {
  // const rowList = ()


  return (
    <table className="recruit_table">
      <tbody>
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
        <RecruitRow />
      </tbody>
    </table>
  );
};

const RecruitDropdownItem = props => {
  return (
    <Fragment>
      <a className="dropdown_item" href="/">
        {props.item}
      </a>
    </Fragment>
  );
};

export const RecruitDropdown = props => {
  return (
    <span>
      <button className="filter_item">{props.title}</button>
      <div className="dropdown_content">
        <RecruitDropdownItem item="전체" />
        <RecruitDropdownItem item="전체" />
        <RecruitDropdownItem item="전체" />
        <RecruitDropdownItem item="전체" />
        <RecruitDropdownItem item="전체" />
      </div>
    </span>
  );
};

export const Filter = props => {
  return (
    <span className="filter_item">
      <label htmlFor="{props.type}">{props.name}:</label>
      <input name="{props.type}" type="text" />
    </span>
  );
};

export const FilterArea = () => {
  return (
    <Fragment>
      <form className="filter_area">
        <Filter name="기술 태그" type="skill" />
        <Filter name="회사명" type="company" />
        <Filter name="셀프 구직" type="self" />
        <RecruitDropdown title="경력" />
        <RecruitDropdown title="경력" />
      </form>
    </Fragment>
  );
};

export const FilterableTable = () => {
  return (
    <div className="filterable_table">
      <FilterArea />
      <RecuitTable />
      <Pagination />
    </div>
  );
};

const RecruitArea = props => {
  // const datas = []
  // const companiesData = () => {
    
  //   for(let i = 0; i < data.companies.length; i++){
  //     datas.push({  })
  //   }


  //   return {}
  // }

  // console.log('companies ', data.companies.length)
  // console.log('address ', data.address.length)

  return (
    <div className="content_area">
      <FilterableTable />
    </div>
  );
};

export default RecruitArea
