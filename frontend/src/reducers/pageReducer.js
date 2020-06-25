const initialState = {
    page : {
        currentPage : 0
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SPECCIFIC_PAGE:
            // 페이지 범위 지정.
            return {
                ...state,
                page: state.currentPage
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.currentPage + 1
            }
        case PREV_PAGE:
            return {
                ...state,
                page: state.currentPage - 1
            }
        default:
            return state
    }
}

export default reducer