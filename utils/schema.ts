import * as Yup from "yup";
import {
  emailDataType,
  fieldMinLength,
  fieldlMaxLength,
  fieldRequired,
  passwordNotMatched,
  integerAllow,
  numberAllow,
  contactLength,
  aadharLength,
  accountLength,
  hsnMinLength,
  hsnMaxLength,
  alphaNumericAllow,
  emailMobileDataType,
  max7Digit,
  amount,
} from "./message";


import { emailRegexp, mobileRegexp } from "@/utils/constants";

const URLSchema = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

export const passwordOnly: any = Yup.object().shape({
  password: Yup
    .string()
    .trim()
    .min(8, fieldMinLength.replace("%key%", "Password").replace("%length%", "8"))
    .max(12, fieldlMaxLength.replace("%key%", "Password").replace("%length%", "12"))
    .required(fieldRequired.replace("%key%", "Password")),
});


export const signupSchemaNewUser: any = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "First Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "First Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "First Name")),
  lastName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Last Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Last Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Last Name")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Mobile number")),
  password: Yup
    .string()
    .trim()
    .min(8, fieldMinLength.replace("%key%", "Password").replace("%length%", "8"))
    .max(12, fieldlMaxLength.replace("%key%", "Password").replace("%length%", "12"))
    .required(fieldRequired.replace("%key%", "Password")),
  confirmPassword: Yup
    .string()
    .trim()
    .oneOf([Yup.ref('password'), ''], passwordNotMatched)
    .required(fieldRequired.replace("%key%", "Confirm Password")),
});

export const addUserSchema: any = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "First Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "First Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "First Name")),
  lastName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Last Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Last Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Last Name")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Mobile number"))
});

export const mobileOnly: any = Yup.object().shape({
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Mobile number"))
})

export const resetPWD: any = Yup.object().shape({
  otp: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(100000, "OTP must contain 6 digits.")
    .max(999999, "OTP must contain 6 digits.")
    .required(fieldRequired.replace("%key%", "OTP")),
  password: Yup
    .string()
    .trim()
    .min(8, fieldMinLength.replace("%key%", "Password").replace("%length%", "8"))
    .max(12, fieldlMaxLength.replace("%key%", "Password").replace("%length%", "12"))
    .required(fieldRequired.replace("%key%", "Password")),
  confirmPassword: Yup
    .string()
    .trim()
    .oneOf([Yup.ref('password'), ''], passwordNotMatched)
    .required(fieldRequired.replace("%key%", "Confirm Password")),
});

export const loginSchema: any = Yup.object().shape({
  role: Yup
    .string()
    .trim()
    .oneOf(['client', 'admin'])
    .required(fieldRequired.replace("%key%", "Role")),
  emailOrMobile: Yup
    .string()
    .trim()
    .test('emailOrMobile', emailMobileDataType, async function (value: any) {
      return emailRegexp.test(value) || mobileRegexp.test(value);
    })
    .max(250, fieldlMaxLength.replace("%key%", "Email or Mobile").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email or Mobile")),
  password: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "Password"))
});

export const mobileSchema: any = Yup.object().shape({
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Contact number"))
});

export const addressOnly: any = Yup.object().shape({
  addresOne: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 1").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Address 1")),
  addresTwo: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 2").replace("%length%", "500")),
  country: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "Country")),
  state: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "State")),
  city: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "City")),
  zipCode: Yup
    .string()
    .trim()
    .min(5, fieldMinLength.replace("%key%", "Pin Code").replace("%length%", "5"))
    .max(6, fieldlMaxLength.replace("%key%", "Pin Code").replace("%length%", "6"))
    .required(fieldRequired.replace("%key%", "City")),
});

export const bankDetailsOnly: any = Yup.object().shape({

  bankName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Bank name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Bank name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Bank name")),
  accountNo: Yup
    .string()
    .trim()
    .typeError(alphaNumericAllow)
    .min(3, fieldMinLength.replace("%key%", "Account Number").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Account Number").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Account Number")),
  beniFiciaryName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Beneficiary name").replace("%length%", "3"))
    .max(1000, fieldlMaxLength.replace("%key%", "Beneficiary name").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Beneficiary name")),
  ifscCode: Yup.string()
    .trim()
    .min(11, fieldMinLength.replace("%key%", "IFSC code").replace("%length%", "11"))
    .max(11, fieldlMaxLength.replace("%key%", "IFSC code").replace("%length%", "11"))
    .required(fieldRequired.replace("%key%", "IFSC code")),

});

export const pancardOnly: any = Yup.object().shape({
  nameAsPerPan: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Name As On PAN").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Name As On PAN").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Name As On PAN")),

  panNo: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .matches(new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/), 'Please enter the correct PAN Number')
    .required(fieldRequired.replace("%key%", "PAN Number")),

  fatherName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Father Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Father Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Father Name")),

  dob: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "DOB").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "DOB").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "DOB")),

});

export const customerSchema: any = Yup.object().shape({

  partyName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Party Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Party Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Party Name")),
  GSTIN_UIN: Yup.string()
    .trim()
    .min(15, fieldMinLength.replace("%key%", "GSTIN").replace("%length%", "15"))
    .max(15, fieldlMaxLength.replace("%key%", "GSTIN").replace("%length%", "15")),
  nameGSTIN: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Name as Per GSTIN").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Name as Per GSTIN").replace("%length%", "250")),
  addresOne: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 1").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Address 1")),
  addresTwo: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 2").replace("%length%", "500")),
  country: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "Country")),
  state: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "State")),
  city: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "City")),
  // ledgerGroup: Yup.string()
  //   .trim()
  //   .required(fieldRequired.replace("%key%", "Ledger Group")),
  zipCode: Yup
    .string()
    .trim()
    .min(5, fieldMinLength.replace("%key%", "Pin Code").replace("%length%", "5"))
    .max(6, fieldlMaxLength.replace("%key%", "Pin Code").replace("%length%", "6")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Contact number")),

});

export const itemSchema: any = Yup.object().shape({

  itemName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Item Name").replace("%length%", "3"))
    .max(1000, fieldlMaxLength.replace("%key%", "Item Name").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Item Name")),
  hsn: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "HSN").replace("%length%", "1000")),
  partNo: Yup
    .string()
    .trim()
    .matches(/^[a-zA-Z0-9]+$/, alphaNumericAllow),
  // .typeError(numberAllow)
  // .integer(integerAllow)
  // .required(fieldRequired.replace("%key%", "Part No.")),
  rate: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow),
  openingBalance: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Opening Balance").replace("%length%", "1000")),
  openingRate: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Opening Rate").replace("%length%", "1000")),
  openingValue: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Opening Balance Amount").replace("%length%", "1000")),
  nature: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Opening Balance Amount").replace("%length%", "1000")),
  uom: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "UOM").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "UOM")),
  stockGroup: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "UOM").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Stock Group")),
  description: Yup
    .string()
    .trim()
    .max(5000, fieldlMaxLength.replace("%key%", "Description").replace("%length%", "5000")),

});

export const supplierSchema: any = Yup.object().shape({

  partyName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Party Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Party Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Party Name")),
  gstin: Yup.string()
    .trim()
    .min(15, fieldMinLength.replace("%key%", "GSTIN").replace("%length%", "15"))
    .max(15, fieldlMaxLength.replace("%key%", "GSTIN").replace("%length%", "15")),
  nameGstin: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Name as Per GSTIN").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Name as Per GSTIN").replace("%length%", "250")),
  addresOne: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 1").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Address 1")),
  addresTwo: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 2").replace("%length%", "500")),
  zipCode: Yup
    .string()
    .trim()
    .min(5, fieldMinLength.replace("%key%", "Pin Code").replace("%length%", "6"))
    .max(6, fieldlMaxLength.replace("%key%", "Pin Code").replace("%length%", "6")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Contact number")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250")),
  bankName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Bank name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Bank name").replace("%length%", "250")),
  beneficiaryName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Beneficiary name").replace("%length%", "3"))
    .max(1000, fieldlMaxLength.replace("%key%", "Beneficiary name").replace("%length%", "1000")),
  accountNumber: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow),
  ifscCode: Yup.string()
    .trim()
    .min(11, fieldMinLength.replace("%key%", "IFSC code").replace("%length%", "11"))
    .max(11, fieldlMaxLength.replace("%key%", "IFSC code").replace("%length%", "11")),


});


export const ledgerSchema: any = Yup.object().shape({

  ledgerName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Ledger Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Ledger Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Ledger Name")),
  gstin: Yup.string()
    .trim()
    .min(15, fieldMinLength.replace("%key%", "GSTIN").replace("%length%", "15"))
    .max(15, fieldlMaxLength.replace("%key%", "GSTIN").replace("%length%", "15")),
  ledgerGroup: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "Ledger Group")),
  typeOfRegistration: Yup
    .string()
    .trim()
    .max(250, fieldlMaxLength.replace("%key%", "Type of Registration").replace("%length%", "250")),
  // .required(fieldRequired.replace("%key%", "Type of Registration")),
  // country: Yup.string()
  //   .trim()
  //   .required(fieldRequired.replace("%key%", "Country")),
  // state: Yup.string()
  //   .trim()
  //   .required(fieldRequired.replace("%key%", "State")),
  // city: Yup.string()
  //   .trim()
  //   .required(fieldRequired.replace("%key%", "City")),
  addresOne: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 1").replace("%length%", "500")),
  // .required(fieldRequired.replace("%key%", "Address 1")),
  addresTwo: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 2").replace("%length%", "500")),
  zipCode: Yup
    .string()
    .trim()
    .min(5, fieldMinLength.replace("%key%", "Pin Code").replace("%length%", "6"))
    .max(6, fieldlMaxLength.replace("%key%", "Pin Code").replace("%length%", "6")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength),
  // .required(fieldRequired.replace("%key%", "Mobile number")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250")),
  bankName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Bank name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Bank name").replace("%length%", "250")),
  beneficiaryName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Beneficiary name").replace("%length%", "3"))
    .max(1000, fieldlMaxLength.replace("%key%", "Beneficiary name").replace("%length%", "1000")),
  accountNumber: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow),
  ifscCode: Yup.string()
    .trim()
    .min(11, fieldMinLength.replace("%key%", "IFSC code").replace("%length%", "11"))
    .max(11, fieldlMaxLength.replace("%key%", "IFSC code").replace("%length%", "11")),

});

export const companySchemaFull: any = Yup.object().shape({

  companyName: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Company Name").replace("%length%", "3"))
    .max(500, fieldlMaxLength.replace("%key%", "Company Name").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Company Name")),
  noOfPartners: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .required(fieldRequired.replace("%key%", "Number of partner")),
  nameAsPerPan: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Name As On PAN").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Name As On PAN").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Name As On PAN")),
  address: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Address").replace("%length%", "3"))
    .max(1000, fieldlMaxLength.replace("%key%", "Address").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Address")),
  country: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "Country")),
  state: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "State")),
  city: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "City")),
  zipCode: Yup
    .string()
    .trim()
    .min(5, fieldMinLength.replace("%key%", "Pin Code").replace("%length%", "5"))
    .max(6, fieldlMaxLength.replace("%key%", "Pin Code").replace("%length%", "6"))
    .required(fieldRequired.replace("%key%", "Pin Code")),
  tan: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "TAN").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "TAN").replace("%length%", "10"))
    .required(fieldRequired.replace("%key%", "TAN")),
  pan_card: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .matches(new RegExp(/^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/), 'Please enter the correct PAN Number')
    .required(fieldRequired.replace("%key%", "PAN Number")),
  type: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "Type")),

});

export const companySchema: any = Yup.object().shape({

  companyName: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Company Name").replace("%length%", "3"))
    .max(500, fieldlMaxLength.replace("%key%", "Company Name").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Company Name")),
  // noOfPartners: Yup
  //   .number()
  //   .typeError(numberAllow)
  //   .integer(integerAllow)
  //   .required(fieldRequired.replace("%key%", "Number of partner")),
  // nameAsPerPan: Yup
  //   .string()
  //   .trim()
  //   .min(3, fieldMinLength.replace("%key%", "Name As On PAN").replace("%length%", "3"))
  //   .max(250, fieldlMaxLength.replace("%key%", "Name As On PAN").replace("%length%", "250"))
  //   .required(fieldRequired.replace("%key%", "Name As On PAN")),
  tan: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "TAN").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "TAN").replace("%length%", "10"))
    .required(fieldRequired.replace("%key%", "TAN")),
  pan_card: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .matches(new RegExp(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/), 'Please enter the correct PAN Number')
    .required(fieldRequired.replace("%key%", "PAN Number")),
  type: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "Type")),

});


export const userProfileSchema: any = Yup.object().shape({

  firstName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "First Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "First Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "First Name")),
  lastName: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Last Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Last Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Last Name")),
  gender: Yup
    .string()
    .trim()
    .oneOf(['male', 'female', 'other'])
    .required(fieldRequired.replace("%key%", "Gender")),
  address: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Address").replace("%length%", "3"))
    .max(1000, fieldlMaxLength.replace("%key%", "Address").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Address")),
  country: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "Country")),
  state: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "State")),
  city: Yup.string()
    .trim()
    .required(fieldRequired.replace("%key%", "City")),
  zipCode: Yup
    .string()
    .trim()
    .min(5, fieldMinLength.replace("%key%", "Pin Code").replace("%length%", "5"))
    .max(6, fieldlMaxLength.replace("%key%", "Pin Code").replace("%length%", "6"))
    .required(fieldRequired.replace("%key%", "Pin Code")),
});

export const dueDateSchema: any = Yup.object().shape({

  title: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Title").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Title").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Title")),
  priority: Yup
    .string()
    .trim()
    .oneOf(['LOW', 'MEDIUM', 'HIGH'])
    .required(fieldRequired.replace("%key%", "Priority")),
  colorCode: Yup
    .string()
    .trim()
    .max(10, fieldlMaxLength.replace("%key%", "Color").replace("%length%", "10")),
  category: Yup
    .string()
    .trim()
    .max(250, fieldlMaxLength.replace("%key%", "Category").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Category")),
  frequency: Yup
    .string()
    .trim()
    .max(250, fieldlMaxLength.replace("%key%", "Category").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Frequency")),
  eventDate: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "Date")),
  customCategory: Yup
    .string()
    .trim()
    .max(250, fieldlMaxLength.replace("%key%", "Custom Name").replace("%length%", "250")),
  description: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Description").replace("%length%", "1000")),
});

export const querySchema: any = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Title").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Title").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Title")),
  priority: Yup
    .string()
    .trim()
    .oneOf(['low', 'medium', 'high'])
    .required(fieldRequired.replace("%key%", "Priority")),
  target: Yup
    .string()
    .trim()
    .max(250, fieldlMaxLength.replace("%key%", "Target").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Target")),
  description: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Description").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Description")),
});

export const addMeetingSchema: any = Yup.object().shape({

  title: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Title").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Title").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Title")),
  eventDate: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "Date")),
  description: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Description").replace("%length%", "1000")),
});


export const partnerAddSchema: any = Yup.object().shape({

  name: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Name")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Contact number")),
  dob: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "DOB").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "DOB").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "DOB")),
  panNo: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .matches(new RegExp(/^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/), 'Please enter the correct PAN Number')
    .required(fieldRequired.replace("%key%", "PAN Number")),
  dinNo: Yup
    .string()
    .trim()
    // .min(10, fieldMinLength.replace("%key%", "DIN Number").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "DIN Number").replace("%length%", "10")),
  // .required(fieldRequired.replace("%key%", "DIN Number")),
  aadhaarNo: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(100000000000, aadharLength)
    .max(999999999999, aadharLength),
  // .required(fieldRequired.replace("%key%", "Aadhaar number")),
  digitalPassword: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Digital Signature Password").replace("%length%", "500")),
  // .required(fieldRequired.replace("%key%", "Digital Signature Password")),
  digitalExpiryDate: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Digital Signature Expiry").replace("%length%", "500")),
  // .required(fieldRequired.replace("%key%", "Digital Signature Expiry")),
  addLine1: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 1").replace("%length%", "500")),
  // .required(fieldRequired.replace("%key%", "Address 1")),
  addLine2: Yup.string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Address 2").replace("%length%", "500")),
  country: Yup.string()
    .trim(),
  // .required(fieldRequired.replace("%key%", "Country")),
  state: Yup.string()
    .trim(),
  // .required(fieldRequired.replace("%key%", "State")),
  city: Yup.string()
    .trim(),
  // .required(fieldRequired.replace("%key%", "City")),
  zipCode: Yup
    .string()
    .trim()
    .min(5, fieldMinLength.replace("%key%", "Pin Code").replace("%length%", "5"))
    .max(6, fieldlMaxLength.replace("%key%", "Pin Code").replace("%length%", "6")),
  // .required(fieldRequired.replace("%key%", "Pin Code")),

});


export const vaultAddSchema: any = Yup.object().shape({

  username: Yup.string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Username").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Username").replace("%length%", "250")),
  // .required(fieldRequired.replace("%key%", "Username")),

  registrationLink: Yup
    .string()
    .trim()
    .matches(URLSchema, "Enter a valid url"),
  // .required(fieldRequired.replace("%key%", "Registration Link")),

  password: Yup
    .string()
    .trim()
    .min(8, fieldMinLength.replace("%key%", "Password").replace("%length%", "8"))
    .max(12, fieldlMaxLength.replace("%key%", "Password").replace("%length%", "12")),
  // .required(fieldRequired.replace("%key%", "Password")),
  typeOfregistration: Yup
    .string()
    .trim(),
  // .required(fieldRequired.replace("%key%", "Type of Registration")),
  registrationNo: Yup
    .string()
    .trim(),
  // .required(fieldRequired.replace("%key%", "Registration Number")),
  expiryDate: Yup
    .string()
    .trim(),
  // .required(fieldRequired.replace("%key%", "Expiry Date")),

});


export const companyDetials: any = Yup.object().shape({

  name: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Company Name").replace("%length%", "3"))
    .max(500, fieldlMaxLength.replace("%key%", "Company Name").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Company Name")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Contact number")),
  // tan: Yup
  //   .string()
  //   .trim()
  //   .min(10, fieldMinLength.replace("%key%", "TAN").replace("%length%", "10"))
  //   .max(10, fieldlMaxLength.replace("%key%", "TAN").replace("%length%", "10"))
  //   .required(fieldRequired.replace("%key%", "TAN")),
  type: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "Type")),

});

export const addCompanySchema: any = Yup.object().shape({

  companyName: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Company Name").replace("%length%", "3"))
    .max(500, fieldlMaxLength.replace("%key%", "Company Name").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Company Name")),
  pan_card: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .max(10, fieldlMaxLength.replace("%key%", "PAN Number").replace("%length%", "10"))
    .matches(new RegExp(/^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/), 'Please enter the correct PAN Number')
    .required(fieldRequired.replace("%key%", "PAN Number")),
  type: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "Type")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Contact number")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
});

export const emailOnlySchema: any = Yup.object().shape({
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
});


export const dispatchOrderDetails: any = Yup.object().shape({
  referenceNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Reference No").replace("%length%", "500")),
  referenceDate: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Reference Date").replace("%length%", "500")),
  otherReference: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Other Reference").replace("%length%", "500")),
  purchaseOrderNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Purchase Order No").replace("%length%", "500")),
  purchaseOrderDate: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Purchase Order Date").replace("%length%", "500")),

  tearmsOfPayment: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Terms of Payment").replace("%length%", "500")),

  deliveryDocNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Delivery Doc No").replace("%length%", "500")),

  deliveryDocDate: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Delivery Doc Date").replace("%length%", "500")),

  dispatchDocNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Dispatch Doc No").replace("%length%", "500")),

  dispatchThrough: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Dispatch Through").replace("%length%", "500")),

  destination: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Destination").replace("%length%", "500")),

  termsOfDelivery: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Terms Of Delivary").replace("%length%", "500")),
});


export const importDetailsSchema: any = Yup.object().shape({
  vesselFlight: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Vassel").replace("%length%", "500")),
  billOfEntryNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Bill of Entry No").replace("%length%", "500")),
  billOfEntryDate: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Bill of Entry Date").replace("%length%", "500")),
  portCode: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Port Code").replace("%length%", "500")),
  porOfLoading: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Port of Loading").replace("%length%", "500")),

  portOfDischarge: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Port of Discharge").replace("%length%", "500")),

  country: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Country To").replace("%length%", "500")),

  placeOfReceipt: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Place of Receipt by Shipper").replace("%length%", "500")),

});

export const exportDetailsSchema: any = Yup.object().shape({
  egmNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "EGM No").replace("%length%", "500")),
  shippingBillNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Shipping Bill No").replace("%length%", "500")),
  shippingBillDate: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Shipping Bill Date").replace("%length%", "500")),
  portCode: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Port Code").replace("%length%", "500")),
  porOfLoading: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Port of Loading").replace("%length%", "500")),

  portOfDischarge: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Port of Discharge").replace("%length%", "500")),

  country: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Country To").replace("%length%", "500")),

  placeOfReceipt: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Place of Receipt by Shipper").replace("%length%", "500")),

});


export const ewayBillSchema: any = Yup.object().shape({
  ewayBillNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "E-Way Bill No").replace("%length%", "500")),
  date: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Date").replace("%length%", "500")),
  distance: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Distance").replace("%length%", "500")),
  dispatchFrom: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Dispatch From").replace("%length%", "500")),
  shipTo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Ship To").replace("%length%", "500")),

  mode: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Mode").replace("%length%", "500")),

  transportName: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Transport Name").replace("%length%", "500")),

  transportId: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Transport ID").replace("%length%", "500")),

  vehicleNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Vehicle No").replace("%length%", "500")),

  airway: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "AirWay No").replace("%length%", "500")),

});


export const ewayBillSchemaReq: any = Yup.object().shape({
  ewayBillNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "E-Way Bill No").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "E-Way Bill No")),
  date: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Date").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Date")),
  distance: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Distance").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Distance")),
  dispatchFrom: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Dispatch From").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Dispatch From")),
  shipTo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Ship To").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Ship To")),

  mode: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Mode").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Mode")),

  transportName: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Transport Name").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Transport Name")),

  transportId: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Transport ID").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Transport ID")),

  vehicleNo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Vehicle No").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Vehicle No")),

  airway: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "AirWay No").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "AirWay No")),

});


export const einvoiceSchema: any = Yup.object().shape({
  dispatchFrom: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Dispatch From").replace("%length%", "500")),
  shipTo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Ship To").replace("%length%", "500")),

});

export const einvoiceSchemaReq: any = Yup.object().shape({
  dispatchFrom: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Dispatch From").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Dispatch From")),
  shipTo: Yup
    .string()
    .trim()
    .max(500, fieldlMaxLength.replace("%key%", "Ship To").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Ship To")),
});


export const UserDetailSchema: any = Yup.object().shape({
  firstName: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Company Name").replace("%length%", "3"))
    .max(500, fieldlMaxLength.replace("%key%", "Company Name").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Company Name")),
  lastName: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Company Name").replace("%length%", "3"))
    .max(500, fieldlMaxLength.replace("%key%", "Company Name").replace("%length%", "500"))
    .required(fieldRequired.replace("%key%", "Company Name")),
  mobile: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .min(1000000000, contactLength)
    .max(9999999999, contactLength)
    .required(fieldRequired.replace("%key%", "Contact number")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
});


export const voucherNumberConf: any = Yup.object().shape({
  startingNo: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .max(9999999, max7Digit)
    .required(fieldRequired.replace("%key%", "Starting number")),
  prefixDetail: Yup
    .string()
    .trim()
    .max(20, fieldlMaxLength.replace("%key%", "Prefix").replace("%length%", "20")),
  suffixDetail: Yup
    .string()
    .trim()
    .max(20, fieldlMaxLength.replace("%key%", "Suffix").replace("%length%", "20")),
});


export const voucherConfEditS: any = Yup.object().shape({
  title: Yup
    .string()
    .trim()
    .max(55, fieldlMaxLength.replace("%key%", "Title").replace("%length%", "55"))
    .required(fieldRequired.replace("%key%", "Title")),
  email: Yup
    .string()
    .trim()
    .email(emailDataType)
    .max(250, fieldlMaxLength.replace("%key%", "Email").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Email")),
  companyName: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Company Name").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Company Name")),
  termsCondition: Yup
    .string()
    .trim()
    .max(1000, fieldlMaxLength.replace("%key%", "Terms & Conditions").replace("%length%", "1000"))
    .required(fieldRequired.replace("%key%", "Terms & Conditions")),
});

export const productSchemaNewProduct: any = Yup.object().shape({
  productName: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Product Name").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Product Name").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Product Name")),
    productDiscription: Yup
    .string()
    .trim()
    .min(10, fieldMinLength.replace("%key%", "Product Discription").replace("%length%", "10"))
    .max(250, fieldlMaxLength.replace("%key%", "Product Discription").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Product Discription")),
  productType: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Product Type").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Product Type").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Product Type")),
  category: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Food Category").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Food Category").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Food Category")),
  amount: Yup
    .number()
    .typeError(numberAllow)
    .integer(integerAllow)
    .max(100000, amount)
    .required(fieldRequired.replace("%key%", "amount")),
  // image: Yup
  //   .string()
  //   .trim()
  //   .required(fieldRequired.replace("%key%", "image")),
  // date: Yup
  //   .string()
  //   .trim()
  //   .required(fieldRequired.replace("%key%", "date"))
});

export const categorySchemaNewCategory: any = Yup.object().shape({
  category: Yup
    .string()
    .trim()
    .min(3, fieldMinLength.replace("%key%", "Food Category").replace("%length%", "3"))
    .max(250, fieldlMaxLength.replace("%key%", "Food Category").replace("%length%", "250"))
    .required(fieldRequired.replace("%key%", "Food Category")),
  // amount: Yup
  //   .number()
  //   .typeError(numberAllow)
  //   .integer(integerAllow)
  //   .max(100000, amount)
  //   .required(fieldRequired.replace("%key%", "amount")),
  // image: Yup
  //   .string()
  //   .trim()
  //   .required(fieldRequired.replace("%key%", "image")),
  date: Yup
    .string()
    .trim()
    .required(fieldRequired.replace("%key%", "date"))
});