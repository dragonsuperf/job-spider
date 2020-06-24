import React, { Fragment } from "react";

// api가 없어서 임시로 사용하는 데이터와 함수
import data from "../../datas.json";
import { randomMinMax } from "../../utils/utilFunctions";

export const Tag = (props) => {
  return <span className="skill_tag">{data.skills[randomMinMax(0, data.skills.length)]}</span>;
};

export const SkillTag = (props) => {
  const listItem = (num) => {
    let tags = [];
    for (let i = 0; i <= num; i++) {
      tags.push(<Tag />);
    }
    return tags;
  };

  return (
    <Fragment>
      {/* 적당히 태그 갯수 맟줘줌. */}
      {listItem(randomMinMax(3, 12))}
    </Fragment>
  );
};

const TagBox = (props) => {
  return (
    <div className="tagbox">
      <SkillTag />
    </div>
  );
};

export default TagBox
