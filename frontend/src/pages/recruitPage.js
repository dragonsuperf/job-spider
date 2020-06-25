import React, { Fragment, useState } from 'react'
import RecruitArea from '../components/recruitTable/recruit'
import data from '../datas.json'

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

const RecruitPage = () => {
    const [page, setPage] = useState(0)
    const tempList = companyList()
    return(
        <Fragment>
            <RecruitArea list={tempList}></RecruitArea>
        </Fragment>
    )
}

export default RecruitPage;