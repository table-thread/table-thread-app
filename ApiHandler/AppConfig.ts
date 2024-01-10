/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiHost, localHost } from '@/utils/constants';

const BASE_URL: string = ApiHost;

const endPoints: any = {

	//tally-on-cloud
	sso: `${BASE_URL}/clients/sso`,
	addTallyClient: `${BASE_URL}/clients/add-tally-client`,
	tocUrlReq: `https://toc.accountsntax.com/guacamole/api/ext/saml/callback`,
	//tally-on-cloud

	signedUrl: `${BASE_URL}/aws-presigned`,
	signup: `${BASE_URL}/auth/signup`,
	login: `${BASE_URL}/auth/login`,
	verifyOtp: `${BASE_URL}/auth/otp-verify`,
	resendOTPApi: `${BASE_URL}/auth/send-auth-otp`,


	forgotPassword: `${BASE_URL}/auth/forgot-password`,
	resetPassword: `${BASE_URL}/auth/reset-password`,

	getUserByMobile: `${BASE_URL}/auth/get-user`,

	getUser: `${BASE_URL}/users`,

	addCompany: `${BASE_URL}/clients/add-company`,
	getCompanies: `${BASE_URL}/clients/companies`,
	getCompanyById: `${BASE_URL}/clients/get-company-details`,
	updateCompany: `${BASE_URL}/clients/update-company`,
	deleteCompanyById: `${BASE_URL}/clients/delete-company`,



	addPartner: `${BASE_URL}/clients/add-partner`,
	updatePartner: `${BASE_URL}/clients/update-partner`,
	deletePartner: `${BASE_URL}/clients/delete-partner`,

	addPasswordVault: `${BASE_URL}/clients/add-password-vault`,
	updatePasswordVault: `${BASE_URL}/clients/update-password-vault`,
	deletePasswordVault: `${BASE_URL}/clients/delete-password-vault`,



	getuoms: `${BASE_URL}/clients/uoms`,
	getStockGroups: `${BASE_URL}/clients/stock-groups`,

	// getCustomers: `${BASE_URL}/clients/customers`,
	addCustomerApi: `${BASE_URL}/clients/add-customer`,

	getSupplier: `${BASE_URL}/clients/suppliers`,
	addSupplier: `${BASE_URL}/clients/add-supplier`,

	getItems: `${BASE_URL}/clients/items`,
	addItems: `${BASE_URL}/clients/add-item`,
	updateItemById: `${BASE_URL}/clients/update-item`,
	itemDetails: `${BASE_URL}/clients/item-details`,

	getAllCountry: `${BASE_URL}/get-country`,
	getStates: `${BASE_URL}/get-state`,
	getCities: `${BASE_URL}/get-city`,
	getBanks: `${BASE_URL}/banks`,

	getItemWiseSales: `${BASE_URL}/clients/sales-itemwise`,

	//clients
	updateClient: `${BASE_URL}/clients/update-client`,

	//client-users
	addUser: `${BASE_URL}/clients/add-user`,
	getUsers: `${BASE_URL}/clients/users`,
	updateUserStatus: `${BASE_URL}/clients/udpate-user-status`,
	updateUser: `${BASE_URL}/clients/update-user`,
	assignCompanies: `${BASE_URL}/clients/assign-company`,
	getGuacamoleUserName: `${BASE_URL}/clients/get-guacamole-username`,




	//mis
	salesMonthly: `${BASE_URL}/mis/sales-monthly`,
	salesByInvoice: `${BASE_URL}/mis/sales-by-invoice`,
	salesRegister: `${BASE_URL}/mis/sales-register`,
	salesCustomerwise: `${BASE_URL}/mis/sales-customerwise`,
	salesItemwise: `${BASE_URL}/mis/sales-itemwise`,
	cashBanks: `${BASE_URL}/mis/cash-banks`,
	gstMonthly: `${BASE_URL}/mis/gst-monthly`,
	gstBalance: `${BASE_URL}/mis/get-gst-balance`,


	//receivable
	salesReceipt: `${BASE_URL}/mis/sales-receipt`,
	receivableByTally: `${BASE_URL}/mis/receivable-by-tally`,
	receivableFifo: `${BASE_URL}/mis/receivable-fifo`,

	//expenses
	vendorWise: `${BASE_URL}/mis/expenses-vendorwise`,
	categoryWise: `${BASE_URL}/mis/expenses-categorywise`,
	expenseRegister: `${BASE_URL}/mis/expenses-register`,
	expensePerformance: `${BASE_URL}/mis/expenses-performance`,

	//payables
	payablesExpenses: `${BASE_URL}/mis/expenses-register`,
	payablesPayments: `${BASE_URL}/mis/expenses-payment`,

	voucherDetails: `${BASE_URL}/mis/voucher-details`,
	voucherTypes: `${BASE_URL}/invoices/voucher-types`,
	invoiceCurrencies: `${BASE_URL}/mis/currencies`,




	ledgerDetails: `${BASE_URL}/clients/ledger-details`,
	addLedgerGroup: `${BASE_URL}/clients/add-ledger`,
	getLedgerGroup: `${BASE_URL}/clients/ledger-groups`,
	accountLedger: `${BASE_URL}/mis/account-ledger`,
	expenseIncomeLedger: `${BASE_URL}/invoices/expense-income-ledger`,
	allLedger: `${BASE_URL}/clients/ledgers`,
	// dutyTaxLedger: `${BASE_URL}/invoices/duty-tax-ledger`, not in use
	// salesLedger: `${BASE_URL}/invoices/sales-ledger`, not in use
	updateLedger: `${BASE_URL}/clients/update-ledger`,


	getGodownList: `${BASE_URL}/mis/get-godowns`,


	//create -invoices
	createInvoice: `${BASE_URL}/invoices/create-sales-invoice`,
	createSalesQuotation: `${BASE_URL}/invoices/create-sales-quotation`,
	createPerformaInvoice: `${BASE_URL}/invoices/create-performa-invoice`,
	createSalesOrder: `${BASE_URL}/invoices/create-sales-order`,
	createCreditNote: `${BASE_URL}/invoices/create-credit-note`,
	createPurchaseInvoice: `${BASE_URL}/invoices/create-purchase-invoice`,
	createPurchaseOrder: `${BASE_URL}/invoices/create-purchase-order`,
	createDebitNote: `${BASE_URL}/invoices/create-debit-note`,
	createPaymentInvoice: `${BASE_URL}/invoices/create-payment-invoice`,
	createReceipt: `${BASE_URL}/invoices/create-receipt-invoice`,
	createJournalInvoice: `${BASE_URL}/invoices/create-journal`,
	createContra: `${BASE_URL}/invoices/create-contra`,


	//get invoice lists
	getSalesQuotations: `${BASE_URL}/invoices/sales-quotations`,
	salesInvoiceList: `${BASE_URL}/invoices/sales-invoices`,
	performaInvoiceList: `${BASE_URL}/invoices/performa-invoices`,
	salesOrderList: `${BASE_URL}/invoices/sales-orders`,
	creditNoteList: `${BASE_URL}/invoices/credit-notes`,
	purchaseInvoiceList: `${BASE_URL}/invoices/purchase-invoices`,
	purchaseOrderList: `${BASE_URL}/invoices/purchase-orders`,
	debitNotesList: `${BASE_URL}/invoices/debit-notes`,

	getPaymentInvoice: `${BASE_URL}/invoices/payment-invoices`,
	getJournalInvoice: `${BASE_URL}/invoices/journals`,
	getContraInvoice: `${BASE_URL}/invoices/contras`,
	getReceiptInvoice: `${BASE_URL}/invoices/receipt-invoices`,

	//Delete and update Invoices
	deleteVoucherById: `${BASE_URL}/invoices/delete-voucher`,
	updateVoucherById: `${BASE_URL}/invoices/update-voucher`,

	//Create Invoice Number 
	createInvoiceNo: `${BASE_URL}/invoices/create-invoice-number-setting`,
	getInvoiceNumber: `${BASE_URL}/invoices/get-invoice-number`,


	//Due-Dates
	getAllDueDates: `${BASE_URL}/clients/get-alldue-date`,

	createDueDate: `${BASE_URL}/clients/create-due-date`,
	updateDueDateById: `${BASE_URL}/clients/update-due-date`,
	deleteDueDateById: `${BASE_URL}/clients/delete-due-date`,

	//Meetings
	getAllMeetings: `${BASE_URL}/clients/get-meetings`,
	createMeetings: `${BASE_URL}/clients/create-meeting`,
	updateMeeting: `${BASE_URL}/clients/update-meeting`,
	deleteMeeting: `${BASE_URL}/clients/delete-meeting`,


	//Configuration
	addVoucherConfig: `${BASE_URL}/invoices/add-voucher-configuration`,
	getVoucherConfig: `${BASE_URL}/invoices/get-voucher-conf`,

	//generate pdf
	generatePDF: `${BASE_URL}/invoices/generate-pdf`,


}

export default endPoints;