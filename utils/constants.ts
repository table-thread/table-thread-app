
// export const ApiHost = "https://api-dev.accountsntax.com/api/v1"
// export const ApiHost = "http://15.206.184.205:5001/api/v1";
// export const ApiHost = "http://3.108.10.69:5001/api/v1";
// export const ApiHost = "http://13.233.81.241:5001/api/v1";
// export const ApiHost = "http://172.174.73.117:5000/api/v1";

export const ApiHost = "https://table-thread.vercel.app/api";



export const localHost = "http://192.168.1.44:5001/api/v1";
export const adminCode = "ACCTX23048373416";
export const temp = "ACCTX23048373416";


export const emailRegexp: RegExp = /^[A-Z0-9!._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const mobileRegexp: RegExp = /^[0-9]{10}$/i; // Modify this regex as needed for your mobile validation

export const currencyType = ['INR', 'US', 'EUR'];
export const currencySelected = ['INR'];

export const bankType = ['All Banks', 'HDFC', 'Bank Of Baroda'];
export const bankSelected = ['All Banks'];

export const dueDate = ['Days from issue data', 'Days from today'];
export const dueDateSct = ['Days from issue data'];

export const customers = ['customer 1', 'customer 2', 'customer 3'];
export const customersSelected = ['customer 1'];

export const dueDatePriority = [
  { value: "LOW", label: "Low" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HIGH", label: "High" },
]

export const selectedDueDatePriority = [
  { value: "low", label: "Low" },
]

export const dueDateCategory = [
  { value: "gst", label: "GST" },
  { value: "itr", label: "ITR" },
  { value: "custom", label: "Custom" }
]

export const dueDateFrequency = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "fortnightly", label: "Fortnightly" },
  { value: "monthly", label: "Monthly" },
  { value: "quaterly", label: "Quaterly" },
  { value: "halfyearly", label: "Half yearly" },
  { value: "yearly", label: "Yearly" },
]

export const selectedDueDateCategory = [
  { value: "gst", label: "GST" },
]

export const predefColorCode = [
  { value: "#04AA6D", label: "gst" },
  { value: "#ff6600", label: "itr" },
]

export const companyType = [
  { value: "individual(proprietorship)", label: "Individual(Proprietorship)" },
  { value: "huf", label: "HUF" },
  { value: "partnership", label: "Partnership" },
  { value: "llp", label: "LLP" },
  { value: "company", label: "Company" },
  { value: "trust", label: "Trust" },
  { value: "other", label: "Other" },
]

export const selectedCompanyType = [
  { value: "individual", label: "Individual" }
]


export const durationFilter = [
  { value: "today", label: "Today" },
  { value: "currentMonth", label: "Current Month" },
  { value: "currentQuarter", label: "Current Quarter" },
  { value: "currentFY", label: "Current FY" },
  { value: "previousFY", label: "Previous FY" },
  { value: "customRange", label: "Custom Range" }
]
export const selectedDurationFilter = [
  { value: "currentMonth", label: "Current Month" },
]

export const genderType = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
]

export const selectedGenderType = [
  { value: "male", label: "Male" }
]

export const queryTarget = [
  { value: "rm", label: "Regional Manager" },
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" }
]

export const meetingDuration = [
  { value: "30 min", label: "30 min" },
  { value: "45 min", label: "45 min" },
  { value: "1 hour", label: "1 hour" }
]

export const queryTargetSelected = [
  { value: "rm", label: "Regional Manager" },
]

export const addressType = [
  { value: "registered", label: "Registered Address" },
  { value: "factory", label: "Factory Address" },
  { value: "godown", label: "Godown Address" },
  { value: "office", label: "Office Address" }
]

export const selectedAddressType = [
  { value: "registered", label: "Registered Address" },
]

export const accountType = [
  { value: "saving", label: "Saving" },
  { value: "current", label: "Current" },
  { value: "cash_credit", label: "Cash Credit" },
  { value: "overdraft", label: "Overdraft" }
]

export const selectedAccountType = [
  { value: "current", label: "Current" },
]

export const typeOfRegistration = [
  { value: "", label: "" },
  { value: "INCOMETAX", label: "INCOMETAX" },
  { value: "GST", label: "GST" },
  { value: "GST_RETURN", label: "GST_RETURN" },
  { value: "BRN", label: "BRN" },
  { value: "MSME", label: "MSME" },
  { value: "DCMSME", label: "DCMSME" },
  { value: "NIMSME", label: "NIMSME" },
  { value: "UDYAM_REGISTRATION", label: "UDYAM_REGISTRATION" },
  { value: "FSSAI", label: "FSSAI" },
  { value: "TAN", label: "TAN" },
  { value: "PAN", label: "PAN" },
  { value: "MUDRA", label: "MUDRA" },
  { value: "UDYAMIMITRA", label: "UDYAMIMITRA" },
  { value: "PM_SANIDHI", label: "PM_SANIDHI" },
  { value: "SIDBI", label: "SIDBI" },
  { value: "INCOMETAX_LOGIN", label: "INCOMETAX_LOGIN" },
  { value: "INCOMETAX_REGISTER", label: "INCOMETAX_REGISTER" },
  { value: "LINK_ADHAAR", label: "LINK_ADHAAR" },
  { value: "TIN", label: "TIN" },
  { value: "NSDL", label: "NSDL" },
  { value: "IEC", label: "IEC" },
  { value: "UDYOG_ADHAAR", label: "UDYOG_ADHAAR" },
  { value: "NGSP", label: "NGSP" },
  { value: "MCA", label: "MCA" },
  { value: "MCA_LOGIN", label: "MCA_LOGIN" },
  { value: "DSC", label: "DSC" },
  { value: "DIN", label: "DIN" },
  { value: "LLP", label: "LLP" },
  { value: "CIN", label: "CIN" },
  { value: "IPINDIA", label: "IPINDIA" },
  { value: "TRADEMARK_REGISTRATION", label: "TRADEMARK_REGISTRATION" },
  { value: "STARTUP_INDIA", label: "STARTUP_INDIA" },
  { value: "ISTART_RAJASTHAN", label: "ISTART_RAJASTHAN" },
  { value: "TRACES", label: "TRACES" },
  { value: "DGFT", label: "DGFT" },
  { value: "ICEGATE", label: "ICEGATE" },
  { value: "ROC", label: "ROC" },
  { value: "OTHER", label: "OTHER" }
]

export const selectedRegistrationType = [
  { value: "INCOMETAX", label: "INCOMETAX" },
]


export const registrationLinks: any = {
  INCOMETAX: "https://www.incometax.gov.in/iec/foportal/",
  GST: "https://www.gst.gov.in/",
  GST_RETURN: "https://www.gst.gov.in/help/returns",
  BRN: "https://www.nic.in/products/rajasthan-business-register/",
  MSME: "https://msme.gov.in/",
  DCMSME: "https://dcmsme.gov.in/",
  NIMSME: "https://www.nimsme.org/",
  UDYAM_REGISTRATION: "https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm",
  FSSAI: "https://www.fssai.gov.in/",
  TAN: "https://incometaxindia.gov.in/Pages/tan-tds.aspx",
  PAN: "https://incometaxindia.gov.in/Pages/pan.aspx",
  MUDRA: "https://www.mudra.org.in/",
  UDYAMIMITRA: "https://udyamimitra.in/",
  PM_SANIDHI: "https://pmsvanidhi.mohua.gov.in/",
  SIDBI: "https://sidbi.in/en",
  INCOMETAX_LOGIN: "https://eportal.incometax.gov.in/iec/foservices/#/login",
  INCOMETAX_REGISTER: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/register",
  LINK_ADHAAR: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar",
  TIN: "https://www.protean-tinpan.com/services/pan/pan-index.html",
  NSDL: "https://nsdl.co.in/",
  IEC: "https://www.iec.ch/homepage",
  UDYOG_ADHAAR: "https://services.india.gov.in/service/detail/udyog-aadhaar-online-registration-for-msme",
  NGSP: "https://services.india.gov.in/",
  MCA: "https://www.mca.gov.in/content/mca/global/en/home.html",
  MCA_LOGIN: "https://www.mca.gov.in/mcafoportal/login.do",
  DSC: "https://www.mca.gov.in/MinistryV2/acquiredsc.html",
  DIN: "https://www.mca.gov.in/MinistryV2/applyfordin.html#:~:text=The%20concept%20of%20a%20Director,(Amendment)%20Act%2C%202006.",
  LLP: "https://www.mca.gov.in/content/mca/global/en/home.html",
  CIN: "https://www.mca.gov.in/mcafoportal/findCIN.do",
  IPINDIA: "https://ipindia.gov.in/index.htm",
  TRADEMARK_REGISTRATION: "https://ipindia.gov.in/trade-marks.htm",
  STARTUP_INDIA: "https://www.startupindia.gov.in/",
  ISTART_RAJASTHAN: "https://istart.rajasthan.gov.in/",
  TRACES: "https://contents.tdscpc.gov.in/",
  DGFT: "https://www.dgft.gov.in/CP/",
  ICEGATE: "https://www.icegate.gov.in/",
  ROC: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html"
}


export const durationType = ['today', 'currentMonth', 'currentQuarter', 'currentFY', 'previousFY', 'customRange'];

export const invoiceType = [
  { value: 'goods', label: 'Goods' },
  { value: 'services', label: 'Services' }
]

export const taxTypeOptions = [
  { value: 'CGST & SGST', label: 'CGST & SGST' },
  { value: 'IGST', label: 'IGST' }
]

export const voucherNumMethod = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' }
]

export const dueCustomListMap = [
  { value: 'custom', label: 'Custom' },
  { value: 7, label: '7-days' },
  { value: 15, label: '15-days' },
  { value: 30, label: '30-days' },
  { value: 45, label: '45-days' },
  { value: 60, label: '60-days' },
  { value: 90, label: '90-days' },
]

export const dueCustomListSelected = [
  { value: 'custom', label: 'Custom' },
]

export const tdsSectionsConst = [
  { label: 'Select Section', value: '1%lam0' },
  { label: '193- Interest on Securities', value: '1%lam10' },
  { label: '194- Dividend', value: '2%lam10' },
  { label: '194A- Interest other than Interest on Securities', value: '3%lam10' },
  { label: '194B-Winnings from lotteries etc', value: '4%lam30' },
  { label: '194BA - Winnings from online games', value: '5%lam30' },
  { label: '194BB - Winning from horse races', value: '6%lam30' },
  { label: '194C - Contract (HUF/ Individuals)', value: '7%lam1' },
  { label: '194C - Contract (Others)', value: '8%lam2' },
  { label: '194D - Insurance Commission (Others)', value: '9%lam5' },
  { label: '194D - Insurance Commission (Companies)', value: '10%lam10' },
  { label: '194G - Commission on sale of Lottery Tickets', value: '11%lam5' },
  { label: '194H - Commission or Brokerage', value: '12%lam5' },
  { label: '194I(a) - Rent on Plant & Machinery', value: '13%lam2' },
  { label: '194I(b) - Rent on Land or building or Furniture or Fitting', value: '14%lam10' },
  { label: '194-IA-Transfer of property', value: '15%lam1' },
  { label: '194-IB-.Rent by individual or HUF', value: '16%lam5' },
  { label: '194-IC- Monetary consideration under Joint Development Agreements', value: '17%lam10' },
  { label: '194J- Professional services Fees', value: '18%lam10' },
  { label: '194J- Technical services Fees', value: '18%lam2' },
  { label: '194K-Income in respect of units payable to resident person', value: '19%lam10' },
  { label: '194LA-Compensation on acquisition of certain immovable property', value: '20%lam10' },
  { label: '194LB-Interest on infrastructure debt fund to non resident', value: '21%lam5' },
  { label: '194LBB- Investment fund paying an income to an unit holder', value: '22%lam10' },
  { label: '194LBC-Income in respect of investment made in a securitisation trust', value: '23%lam25' },
  { label: '194M- Commission,brokerage ,contractual fee,professional fee by an individual/ HUF who are not liable to deduct TDS u/s 194C,194H or 194J', value: '24%lam5' },
  { label: '194N-Cash withdrawal', value: '25%lam2' },
  { label: '194O-Payment or credit of amount by the e-commerce operator to e-commerce participient', value: '26%lam1' },
  { label: '194Q-Purchase of goods applicable w.e.f.(01.07.2021)', value: '27%lam0.10' },
  { label: '195-Payment of any other sum to a non-resident', value: '28%lam20' },
]


export const ALLOWED_IMG = ".jpg, .png, .jpeg";
export const ALLOWED_IMG_AND_FILE = ".jpg, .png, .jpeg, .pdf";
export const ALLOWED_PDF_ZIP_FILE = ".zip , .pdf , .xlsx";
export const ALLOWED_IMG_NAME = "jpg, png, jpeg";
export const CompanyLogoSize = { size: 1000000, label: "Logo", sizeN: "1MB" }; //1mb



export const debitDrop = [
  { label: "Dr", value: "Dr" },
  { label: "Cr", value: "Cr" },
]

export const allocationType: any = [
  { label: "New Ref", value: "new_ref" },
  { label: "Against Ref", value: "against_ref" },
  { label: "Advance", value: "advance" },
  { label: "On Account", value: "on_account" },
]


export const voucherNumberType: any = [
  { label: "Manual", value: "manual" },
  { label: "Automatic", value: "automatic" }
]



export const dummyName: any = [
  { label: "aalam", value: "aalam" },
  { label: "khan", value: "khan" },
  { label: "dev", value: "dev" },
  { label: "manik", value: "manik" },
]

export const dummyDates: any = [
  { label: "12-10-2023", value: "12-10-2023" },
  { label: "12-09-2023", value: "12-09-2023" },
  { label: "09-10-2023", value: "09-10-2023" },
  { label: "25-10-2023", value: "25-10-2023" },
]


export const selectAllCompanies = [
  { value: " ", label: 'Select All Companies' }
]

export const tocURL = "https://toc.accountsntax.com/guacamole";