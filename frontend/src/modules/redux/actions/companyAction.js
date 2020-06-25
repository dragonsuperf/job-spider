import { ADD_COMPANY } from '../constants/companyConstant'
import data from '../../../datas.json'

const companyList = () =>{
    let list = []
    for(let i = 0; i< 12; i++){
        let subList = []
        for(let j = 0; j < 10; j++){
            let multiple = i * 10
            subList.push({
                'company': data.companies[multiple + j],
                'address': data.address[multiple + j]
            })
        }
        list.push(subList)
    }
    return list
}

export const addCompany = (companies) => ({ type: ADD_COMPANY }, companyList());

