import { createStore } from 'redux'

const initialState = {
    page : {
        currentPage : 0
    }
}

const SPECCIFIC_PAGE = "SPECCIFIC_PAGE"
const NEXT_PAGE = "NEXT_PAGE"
const PREV_PAGE = "PREV_PAGE"

const movePage = (page) => {
    return {
        type: SPECCIFIC_PAGE,
        page
    }
}

const nextPage = (page) => {
    return {
        type: NEXT_PAGE,
        page
    }
}

const prevPage = (page) => {
    return {
        type: PREV_PAGE,
        page
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

const store = createStore(reducer)

console.log(store.getState())

const listner = () => {
    const state = store.getState()
    console.log(state)
}

const unsubscribe = store.subscribe(listner)

store.dispatch(movePage())
store.dispatch(nextPage())
store.dispatch(prevPage())
