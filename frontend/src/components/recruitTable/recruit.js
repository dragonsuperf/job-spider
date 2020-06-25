import React, { useEffect, useState, Fragment } from "react";

import Pagination from '../uiComponents/pagination'
import TagBox from '../tableComponents/tag'
import RecruitRow from '../tableComponents/recruitRow'
import PageContainer from '../containers/pageContainer'

// api가 없어서 임시로 사용하는 데이터와 함수
import { randomMinMax } from '../../utils/utilFunctions'
import data from "../../datas.json";



export const RecuitTable = props => {
  const currentPageCompanies = props.list[0]

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

export const FilterableTable = (props) => {

  return (
    <div className="filterable_table">
      <FilterArea />
      <RecuitTable list={props.list}/>
      <Pagination list={props.list}/>
    </div>
  );
};

const RecruitArea = props => {

  return (
    <div className="content_area">
      <FilterableTable list={props.list}/>
    </div>
  );
};

export default RecruitArea
