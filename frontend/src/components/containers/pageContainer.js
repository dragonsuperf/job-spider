import React from "react";
import { bindActionCreators } from "redux";
import { connect,  } from "react-redux";
import Paginations from "../uiComponents/pagination";
import {
  movePage,
  nextPage,
  prevPage,
} from "../../modules/redux/actions/pageAction";

const PageContainer = ({ list, movePage, nextPage, prevPage }) => {
  return (
    <Paginations
      list={list}
      movePage={movePage}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};

// https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6
export default connect(
    (state) => ({
      page: state.page,
    }),
    {
        movePage,
        nextPage,
        prevPage,
    }
  )(PageContainer);

// export default connect(
//   (state) => ({
//     page: state.page,
//   }),
//   (dispatch) =>
//     bindActionCreators({
//       movePage,
//       nextPage,
//       prevPage,
//     }),
//   dispatch
// )(PageContainer);


