import { MOVE_PAGE, NEXT_PAGE, PREV_PAGE } from '../constants/pageConstant'

export const movePage = (page) => ({ type: MOVE_PAGE }, page);
export const nextPage = () => ({ type: NEXT_PAGE });
export const prevPage = () => ({ type: PREV_PAGE });
