import React, { useEffect, useState  } from 'react';
import { getCompaniesData, getSelectedCompanyData, getSelectedCompanyId} from '@/utils/helper';

const BreadCrumb = () => {

  const[company ,setCompany] = useState<any>(null)
  const[companies ,setCompanies] = useState<any>(null)

  useEffect(()=>{
    setCompany(getSelectedCompanyData(getSelectedCompanyId()))
    setCompanies(getCompaniesData())
  },[0])


  return (
    <div className="breadcrumb-wrapper" >
      <div className="br-left" >
        <span className="subTlt" >Welcome</span>
        <span className="orgTlt ps-3 text-capitalize" >{company?.name}</span>
      </div>
      <div className="br-right" >
        <div className="br-one" >Company: <b>{companies ? companies?.length : 0}</b> </div>
        <div className="br-two" >Active Users: <b>{company?.users ? company?.users.length : 0}</b></div>
      </div>

    </div>
  );

};

export default BreadCrumb;