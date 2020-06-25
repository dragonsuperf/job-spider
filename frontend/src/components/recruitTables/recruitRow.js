import React, { useEffect, Fragment } from "react";


import TagBox from "./tag";

import { randomMinMax } from '../../utils/utilFunctions'
import data from '../../datas.json'

export const Logo = (props) => {
  const setLogo = (num) => `/images/logos/${randomMinMax(0, num)}.png`;

  return (
    <Fragment>
      <img className="logo" src={setLogo(16)} />
    </Fragment>
  );
};

export const RecruitRowPrimaryInfo = (props) => {
  return (
    <Fragment>
      <div className="recruit_row__main_info">
        <p className="recruit_row__position ">{data.positions[props.number]}</p>
        <p className="recruit_row__company ">{data.companies[props.number]}</p>
      </div>
    </Fragment>
  );
};

export const RecruitRowSecondaryInfo = (props) => {
  return (
    <div className="recruit_row__secondary">
      <span className="recuit_row__info">
        {data.career[randomMinMax(0, data.career.length)]}
      </span>
      <span className="recuit_row__info">{data.address[props.number]}</span>
      <span className="recuit_row__info">
        {data.signingBonus[randomMinMax(0, 4)]}
      </span>
    </div>
  );
};

const RecruitRow = (props) => {
  const companyName = randomMinMax(0, data.companies.length);

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

export default RecruitRow
