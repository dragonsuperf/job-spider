import React, { useEffect, Fragment } from "react";

import Pagination from '../uiComponents/pagination'
import TagBox from '../tableComponents/tag'

// api가 없어서 임시로 사용하는 데이터와 함수
import { randomMinMax } from '../../utils/utilFunctions'
import data from "../../datas.json";


export const Logo = props => {
  const setLogo = num => `/images/logos/${randomMinMax(0, num)}.png`;

  return (
    <Fragment>
      <img className="logo" src={setLogo(16)} alt={props.name} />
    </Fragment>
  );
};

export const RecruitRowPrimaryInfo = props => {
  return (
    <Fragment>
      <div className="recruit_row__main_info">
        <p className="recruit_row__position ">{data.positions[props.number]}</p>
        <p className="recruit_row__company ">{data.companies[props.number]}</p>
      </div>
    </Fragment>
  );
};

export const RecruitRowSecondaryInfo = props => {
  return (
    <div className="recruit_row__secondary">
      <span className="recuit_row__info">{data.career[randomMinMax(0, data.career.length)]}</span>
      <span className="recuit_row__info">{data.address[props.number]}</span>
      <span className="recuit_row__info">
        {data.signingBonus[randomMinMax(0, 4)]}
      </span>
    </div>
  );
};

export const RecruitRow = props => {

  const companyName = randomMinMax(0, data.companies.length)

  return (
    <tr>
      <td>
        <div className="recruit_row__seperator">
          <Logo />
          <div className="recruit_row__info">
            <RecruitRowPrimaryInfo number={randomMinMax(0, 10)} />
            <RecruitRowSecondaryInfo number={randomMinMax(0, 10)} />
            <TagBox />
          </div>
        </div>
      </td>
    </tr>
  );
};

export const RecuitTable = props => {
  // useEffect(() => {});

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
  const companiesData = () => {

    return {}
  }

  return (
    <div className="content_area">
      <FilterableTable />
    </div>
  );
};

export default RecruitArea
