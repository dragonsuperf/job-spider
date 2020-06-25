import React from "react";
import { Link } from "react-router-dom";

const PageItem = (props) => {
  const page = props.index;
//   const pageChange = props.handleChange.bind(this)

  return (
    <li className="page_item">
      <Link>{props.index}</Link>
    </li>
  );
};

const Pagination = (props) => {
  const indexes = () => {
    const list = [];
    for (let i = 0; i < props.list.length; i++) {
      list.push(i + 1);
    }
    return list;
  };

  const listItems = indexes().map((index) => (
    <PageItem key={index} index={index}></PageItem>
  ));

  return (
    <nav className="page_container">
      <ul className="page_list">
        <PageItem index={"prev"}></PageItem>
        {listItems}
        <PageItem index={"next"}></PageItem>
      </ul>
    </nav>
  );
};

export default Pagination;
