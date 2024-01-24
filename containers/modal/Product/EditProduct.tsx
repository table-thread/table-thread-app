import React, { useState } from 'react';
import { Button, Card, Modal } from 'antd';
import { Formik, Form } from 'formik';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';


import { productSchemaNewProduct, } from '@/utils/schema';

const EditProduct = (props: any) => {

  const { openEditModal, setEditModalOpen } = props

  const [loading, setLoading] = useState<boolean>(false);

  const [initialState, setinitialState] = useState<any>({
    productName: "",
    productType: "",
    category: "",
    amount: "",
    image: ""
  });

  const fallBack = () => {
    setEditModalOpen(false);
  };

  async function callAsync(formValues: any) {
    // console.log(TAG, "Form Values", formValues);
    const onlyApiData = {
      productName: formValues.productName,
      productType: formValues.productType,
      category: formValues.category,
      amount: `${formValues.amount} Rs`,
      image: formValues.image,
    }

    // console.log(TAG, "Api Data to be send", onlyApiData);
    // setProduct((prev: any) => [...prev, onlyApiData]);
    fallBack();
  }


  return (
    <>
      <Modal title="Edit   Product" open={openEditModal} onCancel={fallBack} footer={[
      ]}>
        <section id="editWrapper" >
          <div className="row justify-content-center m-0" style={{ backgroundColor: "#f3f7ff" }}>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
              <div className="pt-5 a-input-wrapper" >
                <Formik
                  initialValues={initialState}
                  validationSchema={productSchemaNewProduct}
                  onSubmit={values => {
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
                            onChangeEvent={(val: any) => { setFieldValue("productName", val.target.value) }}
                          />
                          {errors.productName && touched.productName ? (<div className="in-error text-danger text-danger">{`${errors.productName}`}</div>) : null}
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
                            onChangeEvent={(val: any) => { setFieldValue("productType", val.target.value) }}
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
                            onChangeEvent={(val: any) => { setFieldValue("category", val.target.value) }}
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
                            onChangeEvent={(val: any) => { setFieldValue("amount", val.target.value) }}
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
                            onChangeEvent={(val: any) => { setFieldValue("image", val.target.value) }}
                          />
                          {errors.image && touched.image ? (<div className="in-error text-danger">{`${errors.image}`}</div>) : null}
                        </div>
                      </div>

                      <div className="mt-4" >
                        {loading === true ?
                          <Loader /> :
                          <>
                            <Button title="Cancel" className="me-3" onClick={fallBack}>Cancel</Button>
                            <ButtonSimple title="Submit" type="btn btn-primary  me-3" />
                          </>}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div >
        </section >
      </Modal>
    </>
  )
}

export default EditProduct
