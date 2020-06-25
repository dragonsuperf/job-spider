import { MOVE_PAGE, NEXT_PAGE, PREV_PAGE } from '../constants/pageConstant'

const initialState = {
    page: 1
}

const PageReducer = (state=initialState, action) => {
    switch(action.type) {
        case MOVE_PAGE:
            return {
                page: action.page
            }
        case NEXT_PAGE:
            return {
                page: state.page + 1
            }
        case PREV_PAGE:
            return {
                page: state.page - 1
            }
        default:
            return state
    }
}

export default PageReducer