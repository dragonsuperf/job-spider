export const SPECCIFIC_PAGE = "SPECCIFIC_PAGE"
export const NEXT_PAGE = "NEXT_PAGE"
export const PREV_PAGE = "PREV_PAGE"

export const movePage = (page) => {
    return {
        type: SPECCIFIC_PAGE,
        page
    }
}

export const nextPage = (page) => {
    return {
        type: NEXT_PAGE,
        page
    }
}

export const prevPage = (page) => {
    return {
        type: PREV_PAGE,
        page
    }
}