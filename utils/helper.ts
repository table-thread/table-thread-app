// import pdf from 'html-pdf';

import moment from 'moment-timezone';
import dayjs from 'dayjs';
import nodemailer from 'nodemailer';
import axios from 'axios';

import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';
import ToastComponent from '@/component/Toast/Toast';

export const debounce = (func: any, wait: any) => {
  let timeout: any;

  return function executedFunction(...args: any) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const isEmpty = (value: any) => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
}

export const formateDueDateList = (List: any) => {
  let list: any = [];
  if (List) {
    for (let item of List) {
      list.push([{ ...item, colorName: getColorName(item?.colorCode) }]);
    }
    return list;
  }
}

export async function getColorName(value: string) {
  let colorName: string = "-";
  let colorCode: string = "";
  if (value) {
    colorCode = value.startsWith('#') ? value.slice(1) : value;
    if (colorCode.length === Number(6)) {
      try {
        const response: any = await axios.get(`http://www.thecolorapi.com/id?hex=${colorCode}`)
        if (response && response?.data?.name?.value) {
          colorName = response?.data?.name?.value;
          // console.log("this is color name" ,colorName)
        }
      } catch (error) {
        console.error('Error fetching color name:', error);
      }
    }
  }

  return colorName;
}

// export async function getColorName(value :string):Promise<string>{
//   let colorName :string = "-";
//   let colorCode :string = "";
//   if(value){
//     colorCode = value.startsWith('#') ? value.slice(1) : value ;
//     if(colorCode.length === Number(6)){
//       try {
//         await axios.get(`http://www.thecolorapi.com/id?hex=${colorCode}`
//         ).then(async (response: any) => {
//           if(response && response?.data?.name?.value){
//             colorName= response?.data?.name?.value;
//             console.log("this is color name" ,colorName)
//           } 
//         });         
//       } catch (error) {
//         console.error('Error fetching color name:', error);
//       }
//     }
//   }

//   return colorName
// }



export const generateVoucherTitle = (value: any) => {
  let voucherTitle = "";
  if (value === 'Sales') {
    voucherTitle = "Tax Invoice";
  } else if (value === 'Sales Order') {
    voucherTitle = "Sales Order";
  } else if (value === 'Purchase') {
    voucherTitle = "Purchase Invoice";
  } else if (value === 'Purchase Order') {
    voucherTitle = "Purchase Order";
  } else if (value === 'Receipt') {
    voucherTitle = "Receipt Note";
  } else if (value === 'Payment') {
    voucherTitle = "Payment Advise";
  } else if (value === 'Journal') {
    voucherTitle = "Journal Voucher";
  }
  return voucherTitle;
}


export const getUpdateInvoiceType = (value: any) => {
  let voucherType = "";
  if (value === '1') {
    voucherType = "sales";
  } else if (value === '2') {
    voucherType = "performa";
  } else if (value === '3') {
    voucherType = "salesOrder";
  } else if (value === '4') {
    voucherType = "quotation";
  } else {
    voucherType = "creditNote";
  }
  return voucherType
}


export const getUpdatePurchaseType = (value: any) => {
  let voucherType = "";
  if (value === '1') {
    voucherType = "purchaseInvoice";
  } else if (value === '2') {
    voucherType = "purchaseOrders";
  } else {
    voucherType = "debits";
  }
  return voucherType;
}

export const getUpdatePaymentsType = (value: any) => {
  let voucherType = "";
  if (value === '1') {
    voucherType = "paymentInvoices";
  } else if (value === '2') {
    voucherType = "receipts";
  } else {
    voucherType = "contras";
  }
  return voucherType;
}

export const setItemAmount = (item: any) => {

  // console.log(typeof item?.quantity, typeof item?.rate);

  let amount = 0;
  if (item?.quantity && item?.rate) {
    if (item?.discount) {
      amount = Number(item?.quantity * item?.rate)
    } else {
      amount = item?.quantity * item?.rate * (1 - Number(item?.discount / 100))
    }
  } else {
    amount = Number(item?.amount)
  }

  return Number(amount);
}


export const setBillLedgerSelected = (value: any, List: any) => {
  let ledgerSelected: any = {}
  if (value) {
    const filterList = List.filter((i: any) => i?.label === value?.label)
    ledgerSelected = { ...filterList[0] }
  }

  return ledgerSelected
}

export const getCountryValue = (country: any, countryList: any) => {
  // console.log("this is get couuntry props " , country ,countryList)
  const filteredCountry = countryList.filter((i: any) => i?.label === country)
  console.log("this is get country response", filteredCountry)
  return filteredCountry[0]
}


export const setTypeOFRegistration = (value: any, list: any) => {
  let typeOFRegistration
  const filteredType: any = list.filter((i: any) => i.value === value)
  if (filteredType.length > 0) {
    typeOFRegistration = filteredType[0].value
  } else {
    typeOFRegistration = "OTHER"
  }
  return typeOFRegistration
}

export const setMonthName = (value: string): string => {
  const month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let year, monthCode, date, monthName;
  const dataArr = value.split('-');
  [year, monthCode, date] = dataArr
  if (monthCode[0] === '0') {
    monthCode = monthCode[1]
  }
  console.log("this si month detail", year, monthCode, date)
  monthName = `${month[parseInt(monthCode) - 1]}-${year.slice(2)}`
  return monthName
}


export const setDateRange = (value: string): any => {
  let dateObj = {}
  const dataArr = value.split('-');
  const [year, monthCode, date] = dataArr
  const Month31 = ['01', '03', '05', '07', '08', '10', '12'];
  const Month30 = ['04', '06', '09', '11']

  if (Month31.includes(monthCode)) {
    console
    Object.assign(dateObj, { fromDate: `${year}-${monthCode}-01` })
    Object.assign(dateObj, { toDate: `${year}-${monthCode}-31` })
  }
  else if (Month30.includes(monthCode)) {
    Object.assign(dateObj, { fromDate: `${year}-${monthCode}-01` })
    Object.assign(dateObj, { toDate: `${year}-${monthCode}-30` })
  }
  else if (parseInt(year) % 4 === 0) {
    Object.assign(dateObj, { fromDate: `${year}-${monthCode}-01` })
    Object.assign(dateObj, { toDate: `${year}-${monthCode}-29` })
  }
  else {
    Object.assign(dateObj, { fromDate: `${year}-${monthCode}-01` })
    Object.assign(dateObj, { toDate: `${year}-${monthCode}-28` })
  }

  return dateObj
}


export const getTotalValue = (data: any, key: any) => {
  const total: any = data.reduce((total: any, item: any) => total + item[key], 0)
  return Number(total).toFixed(2)
}


export const ret_ifEmpty = (value: any): any => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return value;
  }
}

export const formateMobileNo = (value: any) => {
  let fromateMobile = ""
  if ((value.length === 13) && (value[0] === "+")) {
    fromateMobile = value.substring(3)
  } else if (value.length === 12) {
    fromateMobile = value.substring(2);
  } else {
    fromateMobile = value
  }

  // return  fromateMobile ?  `+91-${fromateMobile.slice(0, 5)}-${fromateMobile.slice(5)}` : null
  return fromateMobile ? `+91-${fromateMobile}` : null

}

export const decimalTwo = (value: any): any => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return Number(value).toFixed(2);
  }
}

export const noDecimal = (value: any): any => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return Number(value).toFixed(0);
  }
}

export const getToken = () => {
  const checking: any = localStorage.getItem('adminTokenData');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    
    return JSON.parse(checking)?.loginData;
  }
}

export const getUserProfileDetails = () => {
  const checking: any = localStorage.getItem('userData');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking).loginData;
  }
}

export const getCompaniesData = () => {
  const checking: any = localStorage.getItem('companiesData');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking);
  }
}

export const getCompanyList = () => {
  const checking: any = localStorage.getItem('companies');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking);
  }
}


export const getSelectedCompanyId = () => {
  const checking: any = localStorage.getItem('company');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking)._id;
  }
}

export const getSelectedCompany = () => {
  const checking: any = localStorage.getItem('company');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking);
  }
}

export const getSelectedCompanyData = (companyId: string) => {
  const checking: any = localStorage.getItem('companiesData');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    const compArr = JSON.parse(checking);

    const found = compArr.find((singleData: any) => singleData._id === companyId);

    if (isEmpty(found)) {
      window.location.replace('/login');
    }

    return found;

  }
}

export const getLedgers = () => {
  const checking: any = localStorage.getItem('ledgers');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking);
  }
}


export const getUOM = () => {
  const checking: any = localStorage.getItem('uom');
  if (isEmpty(checking)) {
    window.location.replace('/login');
  } else {
    return JSON.parse(checking);
  }
}


export const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}



export const filterAllCountry: Function = (valToFilter: any,) => {
  let tempArray = [];
  for (let item of valToFilter) {
    // tempArray.push({ label: item.name, value: item.isoCode });
    tempArray.push({ label: item.name, value: item.isoCode });
  }
  return tempArray;
}

export const filterAllBanks: Function = (valToFilter: any,) => {
  let tempArray = [];
  for (let item of valToFilter) {
    tempArray.push({ label: item.bankName, value: item.bankName });
  }
  return tempArray;
}

export const filterAllState: Function = (valToFilter: any,) => {
  let tempArray = [];
  for (let item of valToFilter) {
    tempArray.push({ label: item.name, value: item.isoCode });
  }
  return tempArray;
}

export const filterAllCity: Function = (valToFilter: any,) => {
  let tempArray = [];
  for (let item of valToFilter) {
    tempArray.push({ label: item.name, value: item.name });
  }
  return tempArray;
}

export const filterGodown: Function = (valToFilter: any,) => {
  let tempArray = [];
  for (let item of valToFilter) {
    tempArray.push({ label: item.name, value: item.guid });
  }
  return tempArray;
}

export const filterCustomer: Function = (valToFilter: any,) => {
  let tempArray = [];
  for (let item of valToFilter) {
    tempArray.push({ label: item?.mst_ledgers?.name, value: item?._id })
    // tempArray.push({ label: item?.mst_ledgers?.name, value: "SDWDSD" });
  }
  tempArray.splice(0, 0, { label: 'Add Party', value: 'Add Party' });
  // tempArray.splice(0, 0, { label: 'Select Party', value: 'Select Party' });
  return tempArray;
}


// get custome
export const formatedCustomer = (List: any, value: any) => {
  let filterCustomer = List.filter((i: any) => i?.label === value)
  // for (let item of List) {
  //   if(item?.label === value){
  //     filterCustomer = { lable : item?.label , value : item?.value}
  //   }
  // }
  return filterCustomer[0]
}
//date oprations

export const toddmmyy = (value: string) => {
  const momentTime: any = moment(value).tz("Asia/Calcutta");
  return momentTime.format('DD-MM-YYYY');
}

export const removeDateRest = (value: string) => {
  if (isEmpty(value)) {
    return "_";
  } else if (value.includes('T')) {
    const momentTime: any = value.split("T00:00:00.000Z");
    const toDateFormat: any = moment(momentTime[0]).tz("Asia/Calcutta");
    return toDateFormat.format('DD-MM-YYYY');
  } else {
    return value
  }
}

export const addDateRest = (value: string) => {
  if (isEmpty(value)) {
    return "";
  } else {
    return `${value}T00:00:00.000Z`;
  }
}

export const getNoOfDays = () => {

  let noOfDays;
  const getData: any = localStorage.getItem('tallyOnCloudset')
  const parsed: any = JSON.parse(getData)
  if (parsed) {
    const todate = dayjs(dayjs(), 'DD-MM-YYYY').format('DD-MM-YYYY')
    const endDate = parsed?.endDate
    noOfDays = endDate.diff(todate, 'days')
  }

  return noOfDays

}

export const dateDiffInDays = (value: string) => {
  if (isEmpty(value)) {
    return "_";
  } else {
    const momentTime: any = value.split("T00:00:00.000Z");
    const toDateFormat: any = moment(momentTime[0]).tz("Asia/Calcutta");
    const todate = moment().tz("Asia/Calcutta");
    console.log("this is no of days ", todate, todate.diff(toDateFormat, 'days'))
    return todate.diff(toDateFormat, 'days')
  }
}

export const yyyymmTommmYY = (value: string) => {
  if (isEmpty(value)) {
    return "_";
  } else {
    const toDateFormat: any = moment(value).tz("Asia/Calcutta");
    return toDateFormat.format('MMM-YYYY');
  }
}

export const ddmmyyyyToyyyymmdd = (val: string) => {
  return isEmpty(val) ? "" : dayjs(val, 'DD-MM-YYYY').format('YYYY-MM-DD');
}


export const yyyymmddToddmmyyyy = (val: string) => {
  return isEmpty(val) ? "" : dayjs(val, 'YYYY-MM-DD').format('DD-MM-YYYY');
}

//date oprations


export const generateAddressLine = (value: any) => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return ` ${value?.addLine1} ${value?.addLine2} ${value?.city} ${value?.state} ${value?.pincode} `;
  }
}

export const SrPageNumber = (defaultCurrent: any, index: any) => {
  if (isEmpty(defaultCurrent) && isEmpty(index)) {
    return "_";
  } else {
    if (defaultCurrent == 1) {
      return index + 1;
    } else {
      return (defaultCurrent - 1) * 10 + (index + 1);
    }
  }
}

export const toDebit = (value: any) => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return value < 0 ? decimalTwo((value * -1)) : ""
  }
}

export const toCredit = (value: any) => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return value > 0 ? decimalTwo(value) : ""
  }
}

export const removeFilePath = (value: string) => {

  const fullCompleteName: any = value;
  const findIndex = fullCompleteName.indexOf("/");
  if (findIndex == -1) {
    return value;
  } else {
    const afterSplit: any = value.split("/");
    return afterSplit[afterSplit.length - 1];
  }

}

export const dutyTaxLedgerType = (voucherData: any) => {
  let list = [];
  for (let item of voucherData) {
    list.push({ value: item?.mst_ledgers?.name, label: item?.mst_ledgers?.name });
  }
  list.splice(0, 0, { label: 'Add Ledger', value: 'Add Ledger' });
  // list.splice(0, 0, { label: 'Select Ledger', value: 'Select Ledger' });
  return list;
}

export const generateItemType = (voucherData: any) => {
  let list = [];
  for (let item of voucherData) {
    list.push({ value: item?._id, label: item?.name });
  }

  list.splice(0, 0, { label: 'Add Item', value: 'Add Item' });
  // list.splice(0, 0, { label: 'Select Item', value: 'Select Item' });

  return list;
}

export const generateAddressType = (addressData: any) => {
  let list: any = [];
  if (addressData && Array.isArray(addressData)) {
    for (let item of addressData) {
      list.push({
        value: item?._id,
        label: `${item?.type ? `${item?.type} :` : "-"}
        ${item?.addLine1 ? item?.addLine1 : ""},
        ${item?.addLine2 ? item?.addLine2 : ""},
        ${item?.city ? item?.city : ""},
        ${item?.state ? item?.state : ""},
        ${item?.country ? item?.country : ""},
        ${item?.pincode ? item?.pincode : ""}`
      });
    }
    list.splice(0, 0, { label: 'Add Address', value: 'Add Address' });
    return list;
  } else if (addressData) {
    return {
      value: 'apiAddress',
      label: `${addressData?.type ? `${addressData?.type} :` : "-"} ${addressData?.addLine1 ? addressData?.addLine1 : ""}, ${addressData?.addLine2 ? addressData?.addLine2 : ""}, ${addressData?.city ? addressData?.city : ""}, ${addressData?.state ? addressData?.state : ""}, ${addressData?.country ? addressData?.country : ""}, ${addressData?.pincode ? addressData?.pincode : ""}`
    }
  } else {
    return list;
  }
}

export const generateBankType = (bankData: any) => {
  let list: any = [];
  if (bankData && Array.isArray(bankData)) {
    for (let item of bankData) {
      list.push({
        value: item?._id,
        label: `${item?.bankName ? item?.bankName.toUpperCase() : "-"} - ${item?.accountNo ? item?.accountNo : "-"}`
      });
    }

    list.splice(0, 0, { label: 'Add Bank', value: 'Add Bank' });

    return list;
  } else if (bankData) {
    return {
      value: 'apiBank',
      label: `${bankData?.bankName ? bankData?.bankName.toUpperCase() : "-"} - ${bankData?.accountNo ? bankData?.accountNo : "-"}`
    }
  } else {
    return list;
  }



  // console.log("this is bank list : " , list)

  return list;
}

export const mstLedgerNameAndId = (voucherData: any) => {
  let list = [];
  for (let item of voucherData) {
    list.push({ value: item?._id, label: item?.mst_ledgers?.name });
  }
  list.splice(0, 0, { label: 'Add Ledger', value: 'Add Ledger' });
  // list.splice(0, 0, { label: 'Select Ledger', value: 'Select Ledger' });
  return list;
}

export const mstLedgerNameAndIdNew = (voucherData: any) => {
  let list = [];
  for (let item of voucherData) {
    list.push({ value: item?._id, label: item?.mst_ledgers?.name });
  }
  list.splice(0, 0, { label: 'Add Ledger', value: 'Add Ledger' });
  // list.splice(0, 0, { label: 'Select Ledger', value: 'Select Ledger' });
  return list;
}

export const generateVoucherType = (voucherData: any) => {
  let tempArray = [];
  for (let item of voucherData) {
    tempArray.push({ value: item?._id, label: item?.name });
  }
  // tempArray.splice(0, 0, { label: 'Add New Voucher Type', value: 'Add New Voucher Type' });
  // tempArray.splice(0, 0, { label: 'Select Voucher Type', value: 'Select Voucher Type' });
  return tempArray;
}

export const generateVoucherName = (voucherData: any) => {
  let tempArray = [];
  for (let item of voucherData) {
    tempArray.push({ value: item?._id, label: item?.name });
  }
  tempArray.splice(0, 0, { label: 'Select Voucher Name', value: 'Select Voucher Name' });
  return tempArray;
}

export const filterSelectItem = (List: any, value: any) => {
  for (let item of List) {
    if (item?.label === value) {
      // const itemIdenx = List.indexOf(item)
      // console.log("this is fiter voucher details " , List , {label : List[itemIdenx]?.label , value : List[itemIdenx]?.value} )
      // return {label : List[itemIdenx]?.label , value : List[itemIdenx]?.value}
      return item
    }
  }
}

export const generateCurrencyType = (voucherData: any) => {
  let list = [];
  for (let item of voucherData) {
    list.push({ value: item?.symbol, label: item?.formalname });
  }
  return list;
}

export const removeplus91 = (value: string) => {
  if ((value.length === 13) && (value[0] === "+")) {
    return value.substring(3)
  } else if (value.length === 12) {
    return value.substring(2);
  }
  return value;
}


export const closingDrOrCr = (value: any) => {
  if (isEmpty(value)) {
    return "_";
  } else {
    return value < 0 ? `${value * -1} Dr` : `${value} Cr`;
  }
}

export const durationFilterHelper = (value: string) => {

  const momentTime: any = moment().tz("Asia/Calcutta");

  if (value === "currentMonth") {
    const dateOne = momentTime.format('YYYY-MM-01');
    const dateTwo = momentTime.endOf('month').format('YYYY-MM-DD');
    return { dateOne, dateTwo };
  }

  if (value === "today") {
    const dateOne = momentTime.format('YYYY-MM-DD');
    const dateTwo = momentTime.add(1, 'days').format('YYYY-MM-DD');
    return { dateOne, dateTwo };
  }

  if (value === "currentQuarter") {
    const dateOne = momentTime.quarter(momentTime.quarter()).startOf('quarter').format('YYYY-MM-DD');
    const dateTwo = momentTime.quarter(momentTime.quarter()).endOf('quarter').format('YYYY-MM-DD');
    return { dateOne, dateTwo };
  }

  if (value === "currentFY") {
    const daterow = momentTime.year();
    const dateOne = `${daterow}-04-01`;
    const dateTwo = `${daterow + 1}-03-31`;
    return { dateOne, dateTwo };
  }

  if (value === "previousFY") {
    const daterow = momentTime.year();
    const dateOne = `${daterow - 1}-04-01`;
    const dateTwo = `${daterow}-03-31`;
    return { dateOne, dateTwo };
  }

}




export const deleteS3F = async (args: any) => {
  return new Promise((resolve, reject) => {

    let apiUrl: string = `${endPoints.signedUrl}?type=${args.type}&fileName=${args.path}`;
    NetworkOps.makeGetRequest(apiUrl, false)
      .then(async (response: any) => {
        // debugLog("Helper ", ' patient details response we got ', response);
        return resolve(response?.data?.data);
      })
      .catch((error: any) => {
        console.log("Helper ", 'error i got in catch', error);
      });

  });
}

export const deleteS3File = async (url: any) => {
  const fileUrl: any = await deleteS3F({ path: url, type: "delete" });
  return fileUrl;
}

export const getS3SignedUrl = async (args: any) => {
  return new Promise((resolve, reject) => {

    let apiUrl: string = `${endPoints.signedUrl}?type=${args.type}&fileName=${args.path}`;
    NetworkOps.makeGetRequest(apiUrl, false)
      .then(async (response: any) => {
        // debugLog("Helper ", ' patient details response we got ', response);
        return resolve(response?.data?.data);
      })
      .catch((error: any) => {
        console.log("Helper ", 'error i got in catch', error);
      });

  });
}

export const uploadFileToS3 = async (args: any) => {
  return new Promise((resolve, reject) => {

    let formatDate = new FormData();
    formatDate.append('file', args.file);

    let fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: args.file,
    };

    // debugLog("Helper ", 's3 url', args.url);
    // debugLog("Helper ", 'upload s3 fetch options', fetchOptions);

    fetch(args.url, fetchOptions)
      .then(async (response) => {
        // debugLog("Helper ", 'response before json', response);
        if (response.status == 200) {
          resolve(response);
          ToastComponent("File Uploaded");
        } else {
          resolve({ error: true, message: "facing technical difficulties" });
        }
      })
      .catch((error) => {
        console.log("Helper ", ' error i got while upload file to s3 ', error);
        resolve({ error: true, message: "facing technical difficulties" });
      });

  });
}

export const getAWSFileUrl = async (url: any) => {
  const fileUrl: any = await getS3SignedUrl({ path: url, type: "get" });
  return fileUrl;
}

export const uploadFile = async (files: any, url: any) => {

  if (files && files.length) {

    // console.log("Helper ", "  calling with ", files, filename, ext, url);

    try {
      const response = await getS3SignedUrl({ path: url, type: "put" });
      // debugLog("Helper ", " response of get signed url ", response);
      try {
        const holdRes = await uploadFileToS3({ url: response, file: files[0] });
        // debugLog("Helper ", " upload api response ", holdRes);
        return url;

      } catch (error) {
        console.log("Helper ", " error we got while uploading file to s3 ", error);
      }

    } catch (error) {
      console.log("Helper ", " error in getting signed url ", error);
    }
  }

}

export const miltiPer = (num: any, amount: any) => {
  return num * amount / 100;
}

export const calcOther = (toCalc: any) => {
  let val = 0;
  if (!isEmpty(toCalc) && !isEmpty(toCalc.length) && toCalc.length > 0) {
    for (let item of toCalc) {
      val = val + (isEmpty(item.amount) ? 0 : Number(item.amount))
    }
  }
  return Number(decimalTwo(Number(val)));
}

export const calcTotal = (finalData: any): any => {
  let val = 0;
  val = val + (isEmpty(finalData?.allData?.amount) ? 0 : Number(finalData?.allData?.amount));
  if (finalData?.taxType == "CGST & SGST") {
    val = val + (isEmpty(finalData?.allData?.cgst.amount) ? 0 : Number(finalData?.allData?.cgst.amount));
    val = val + (isEmpty(finalData?.allData?.sgst.amount) ? 0 : Number(finalData?.allData?.sgst.amount));
  } else {
    val = val + (isEmpty(finalData?.allData?.igst?.amount) ? 0 : Number(finalData?.allData?.igst?.amount));
  }
  val = val - (isEmpty(finalData?.allData?.discount?.amount) ? 0 : Number(finalData?.allData?.discount?.amount));
  val = val + (isEmpty(finalData?.allData?.freight?.amount) ? 0 : Number(finalData?.allData?.freight?.amount));
  val = val + calcOther(finalData?.otherData);
  return Number(decimalTwo(Number(val)));
}


// export async function convertHtmlToPdf(html :any) {
//   return new Promise((resolve, reject) => {
//     const options :any = { format: 'Letter' }; // You can customize the PDF format
//     pdf.create(html, options).toBuffer((err, buffer) => {
//       if (err) {
//         reject(err);
//       } else {
//         const pdfData = buffer.toString('base64');
//         resolve(pdfData);
//       }
//     });
//   });
// }
