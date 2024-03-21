import React, { useState } from 'react';

import { Button, Modal } from 'antd';
import { Formik, Form } from 'formik';

import { productSchemaNewProduct, } from '@/utils/schema';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';
import ToastComponent from '@/component/Toast/Toast';


import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';

import ProductQuantity from './ProductQuantity';

const TAG = 'modal product add'

const AddProduct = (props: any) => {

  const { openModal, setOpenModal, setProduct } = props;

  const [rows, setRows] = useState<Record<string, string | number>[]>([{}]);
  const [loading, setLoading] = useState<boolean>(false);

  const [initialState, setinitialState] = useState<any>({
    productName: "",
    productDiscription: "",
    productType: "",
    category: "",
    amount: "",
    image: ""
  });

  const fallBack = () => {
    setOpenModal(null);
  };

  async function callAsync(formValues: any) {
    // console.log(TAG, "Form Values", formValues);
    const onlyApiData = {
      productName: formValues.productName,
      productDiscription: formValues.productDiscription,
      productType: formValues.productType,
      category: formValues.category,
      amount: formValues.amount,
      image: formValues.image,
      productQuantity: rows
    };

    console.log(TAG, "Api Data to be send", onlyApiData);
    registerCall(onlyApiData)
    setProduct((prev: any) => [...prev, onlyApiData]);
    fallBack();
  };

  async function registerCall(addJson: any): Promise<void> {

    NetworkOps.makePostRequest(endPoints.addProduct, addJson, false)
      .then(async (response: any) => {
        console.log(TAG, ' addProduct response ', response);
        if (response?.status == 200 && response?.data?.success == true) {
          ToastComponent(response?.data?.msg);
          // console.log("this is addProduct data ", response, response?.data?.data?.userData)
          console.log("this is addProduct data ", response)
          // router.push('/home');
        } else if (response?.status == 200 && response?.data?.success == false) {
          setLoading(false);
          // localStorage.setItem('otpmobile', JSON.stringify(response?.data?.data));
          // ToastComponent(response?.data?.msg);
          // router.push(`/signUp`);
          // router.push('/home');
        } else {
          setLoading(false);
          ToastComponent(response?.data?.msg);
          console.log(TAG, ' error got in else ');
        }
      })
      .catch((error: any) => {
        setLoading(false);
        error?.data?.msg ? ToastComponent(error?.data?.msg) : null;
        console.log(TAG, ' error i got in catch ', error);
      });

    // const raw = {
    //   "name": "Naan",
    //   "title": "Butter Naan",
    //   "description": "A Beautiful and Healthy Tawa Chappati that is good for our Health, this is No. 1 Tawa chapaati on this planet No one can made a Tawa Chapaati like us",
    //   "type": "Pure-Veg",
    //   "amount": 80,
    //   "image": "/product_image/product1.png",
    //   "restaurent": "65f9d694d3deb455ab0509bd",
    //   "category": "65f9d99f01c4768df8c069e6",
    //   "createdAt": "2024-02-20T05:08:54.631446",
    //   "updatedAt": "2024-02-20T05:08:54.631451"
    // };

    // const requestOptions: any = {
    //   method: "POST",
    //   body: raw,
    //   redirect: "follow"
    // };

    // fetch("https://table-thread.vercel.app/api/admin/add-product", requestOptions)
    // .then((response) => console.log("this is addProduct data ", response))
    // .then((result) => console.log("this is addProduct data ", result))
    // .catch((error) => console.error("this is addProduct data error ", error));
  }

  const handleAddRow = () => {
    const newRow = {};
    setRows([...rows, newRow]);
  };

  const handleRemoveSpecificRow = (idx: number) => {
    const tempRows = [...rows];

    // Remove the row at the specified index
    tempRows.splice(idx, 1);

    setRows(tempRows);
  };

  const updateState = (e: any, index: number, column: string) => {
    const newValue = e.target.value;

    const updatedRows = rows.map((row, rowIndex) => {
      if (rowIndex === index) {
        return { ...row, [column]: newValue };
      }
      return row;
    });

    setRows(updatedRows);
  };


  return (
    <div className=''>
      <Modal
        title="Add Product" open={openModal == null ? false : true} onCancel={fallBack} footer={[
        ]}>
        <section id="productWrapper" >
          <div className="container py-2" style={{ backgroundColor: "#f3f7ff" }}>
            <Formik
              initialValues={initialState}
              validationSchema={productSchemaNewProduct}
              onSubmit={(values) => {
                callAsync(values);
              }}
            >
              {({ errors, values, touched, handleChange, setFieldValue }) => (
                <Form className="w-100">
                  <div className="row gy-2 gx-3" >

                    <div className="col-12" >
                      <CustomInput
                        label="Product Name"
                        id="productName"
                        name="productName"
                        placeholder="Product Name"
                        type="text"
                        defaultValue={values.productName}
                        disabled={false}
                        maxLength={250}
                        asterisk={true}
                        onChangeEvent={handleChange('productName')}
                      />
                      {errors.productName && touched.productName ? (<div className="in-error text-danger">{`${errors.productName}`}</div>) : null}
                    </div>

                    <div className="col-12" >
                      <CustomInput
                        label="Product Discription"
                        id="productDiscription"
                        name="productDiscription"
                        placeholder="Product Discription"
                        type="text"
                        defaultValue={values.productDiscription}
                        disabled={false}
                        maxLength={250}
                        asterisk={true}
                        onChangeEvent={handleChange('productDiscription')}
                      />
                      {errors.productDiscription && touched.productDiscription ? (<div className="in-error text-danger">{`${errors.productDiscription}`}</div>) : null}
                    </div>

                    <div className="col-12" >
                      <CustomInput
                        label="Product Type"
                        id="productType"
                        name="productType"
                        placeholder="Product Type"
                        type="text"
                        defaultValue={values.productType}
                        disabled={false}
                        asterisk={true}
                        maxLength={250}
                        onChangeEvent={handleChange('productType')}
                      />
                      {errors.productType && touched.productType ? (<div className="in-error text-danger">{`${errors.productType}`}</div>) : null}
                    </div>

                    <div className="col-12" >
                      <CustomInput
                        label="Product Category"
                        id="category"
                        name="category"
                        placeholder="product Category"
                        type="text"
                        disabled={false}
                        maxLength={250}
                        defaultValue={values.category}
                        asterisk={true}
                        onChangeEvent={handleChange('category')}
                      />
                      {errors.category && touched.category ? (<div className="in-error text-danger">{`${errors.category}`}</div>) : null}
                    </div>

                    <div className="col-12" >
                      <CustomInput
                        label="Amount"
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        type="number"
                        disabled={false}
                        maxLength={10}
                        defaultValue={values.amount}
                        asterisk={true}
                        onChangeEvent={handleChange('amount')}
                      />
                      {errors.amount && touched.amount ? (<div className="in-error text-danger">{`${errors.amount}`}</div>) : null}
                    </div>

                    <div className="col-12" >
                      <CustomInput
                        label="upload image"
                        id="image"
                        name="image"
                        placeholder="image"
                        type="file"
                        defaultValue={values.image}
                        disabled={false}
                        maxLength={250}
                        asterisk={false}
                        onChangeEvent={handleChange('image')}
                      />
                      {errors.image && touched.image ? (<div className="in-error text-danger">{`${errors.image}`}</div>) : null}
                    </div>

                    {/* add quantity row of product Item  */}
                    <ProductQuantity
                      handleAddRow={handleAddRow}
                      handleRemoveSpecificRow={handleRemoveSpecificRow}
                      rows={rows}
                      setRows={setRows}
                    />

                  </div>

                  <div className="col-12 my-2 d-flex justify-content-end" >
                    {loading === true ?
                      (<Loader />) : (
                        <>
                          <Button title="Cancel" className="me-3" onClick={() => setOpenModal(null)}>Cancel</Button>
                          <ButtonSimple title="Submit" type="btn btn-primary me-3" disabled={loading} />
                        </>
                      )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section >
      </Modal>
    </div>
  )
}

export default AddProduct
