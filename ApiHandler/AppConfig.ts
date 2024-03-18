/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiHost, localHost } from '@/utils/constants';

const BASE_URL: string = ApiHost;

const endPoints: any = {

	// auth
	login: `${BASE_URL}/auth/admin-login`,

	//product Category
	addCategory: `${BASE_URL}/admin/add-category`,
	// getCategory: `${BASE_URL}/admin/get-category-details/${_id}`,
	// updateCategory: `${BASE_URL}/admin/update-category/${_id}`,
	// deleteCategory: `${BASE_URL}/admin/delete-category/${_id}`,


}

export default endPoints;