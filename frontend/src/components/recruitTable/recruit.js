import React, { useEffect, Fragment } from "react";

import data from "../../datas.json";

const randomTen = max => Math.floor(Math.random() * max);
const randomeMinMax = (min, max) => {
  let num = 0;
  while (true) {
    num = Math.floor(Math.random() * max);
    if (num >= min) {
      break;
    }
  }
  return num;
};

const Tag = props => {
  return <span className="skill_tag">{data.skills[randomTen(64)]}</span>;
};

export const SkillTag = props => {
  const listItem = num => {
    let tags = [];
    for (let i = 0; i <= num; i++) {
      tags.push(<Tag />);
    }
    return tags;
  };

  return (
    <Fragment>
        {listItem(randomeMinMax(3, 12))}
    </Fragment>
  );
};

export const TagBox = props => {
  return (
    <div className="tagbox">
      <SkillTag />
    </div>
  );
};

export const Logo = props => {
  const setLogo = num => `/images/logos/${randomTen(num)}.png`;

  return (
    <Fragment>
      <img className="logo" src={setLogo(15)} alt="{props.name}" />
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
      <span className="recuit_row__info">{data.career[randomTen(5)]}</span>
      <span className="recuit_row__info">{data.address[props.number]}</span>
      <span className="recuit_row__info">
        {data.signingBonus[randomTen(4)]}
      </span>
    </div>
  );
};

export const RecruitRow = props => {
  return (
    <tr>
      <td>
        <div className="recruit_row__seperator">
          <Logo />
          <div className="recruit_row__info">
            <RecruitRowPrimaryInfo number={randomTen(10)} />
            <RecruitRowSecondaryInfo number={randomTen(10)} />
            <TagBox />
          </div>
        </div>
      </td>
    </tr>
  );
};

export const RecuitTable = props => {
  useEffect(() => {});

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

// export const FilterItem = props => {
//   return (
//     <span className="filter_item">

//     </span>
//   )
// }

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

export const Pagination = props => {
  return (
    <Fragment>
      <h3>Pagination</h3>
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
  return (
    <div className="content_area">
      <FilterableTable />
    </div>
  );
};

export default RecruitArea
