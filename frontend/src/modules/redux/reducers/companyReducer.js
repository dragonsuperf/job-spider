import { ADD_COMPANY } from '../constants/companyConstant'

const initialState = {
    companies: [],
}

const CompanyReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_COMPANY:
            console.log(ADD_COMPANY)
            return {
                companies: action.companies
            }
        default:
            return state
    }
}

export default CompanyReducer