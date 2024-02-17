import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Formik, Form } from 'formik';

import { ICBsTrash3Fill } from '@/utils/icons';

import CustomInput from '@/component/input/input';

import { productSchemaNewProduct, } from '@/utils/schema';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';

const TAG = 'modal product add'

const AddProduct = (props: any) => {

  const { openModal, setOpenModal, setProduct } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [addQuantity, setAddQuantity] = useState([1,2]);


  const [initialState, setinitialState] = useState<any>({
    productName: "",
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
      productType: formValues.productType,
      category: formValues.category,
      amount: `${formValues.amount} Rs`,
      image: formValues.image,
    }

    console.log(TAG, "Api Data to be send", onlyApiData);
    setProduct((prev: any) => [...prev, onlyApiData]);
    fallBack();
  }

  const AddQuantity = () => {
    setAddQuantity ((prev) => [...prev,1])
  }



  return (
    <div className=''>
      <Modal title="Add Product" open={openModal == null ? false : true} onCancel={fallBack} footer={[
      ]}>
        <section id="productWrapper" >
          <div className="row justify-content-center m-0" style={{ backgroundColor: "#f3f7ff" }}>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
              <div className="pt-5 a-input-wrapper" >
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
                          {/* {JSON.stringify(errors.category)} */}
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


                        <div className="col-12 mt-3" >
                          <div className='row fw-bold mb-2'>
                            <div className='col-5'>product quantity</div>
                            <div className='col-5 '>product price</div>
                          </div>

                          {addQuantity.map((item, index) => {
                            return (
                              <div className='row my-2'>
                                <div className="col-5" >
                                  <CustomInput
                                    // label="Product Name"
                                    id="productName"
                                    name="productName"
                                    placeholder="Product quantity"
                                    type="text"
                                    defaultValue={values.productName}
                                    disabled={false}
                                    maxLength={250}
                                    asterisk={true}
                                    onChangeEvent={handleChange('productName')}
                                  />
                                  {errors.productName && touched.productName ? (<div className="in-error text-danger">{`${errors.productName}`}</div>) : null}
                                </div>
                                <div className="col-5" >
                                  <CustomInput
                                    // label="Amount"
                                    id="amount"
                                    name="amount"
                                    placeholder="price"
                                    type="number"
                                    disabled={false}
                                    maxLength={10}
                                    defaultValue={values.amount}
                                    asterisk={true}
                                    onChangeEvent={handleChange('amount')}
                                  />
                                  {errors.amount && touched.amount ? (<div className="in-error text-danger">{`${errors.amount}`}</div>) : null}
                                </div>
                                <div className='col-2'>
                                  <Button><ICBsTrash3Fill /></Button>
                                </div>
                              </div>
                            )
                          })}

                          <div className='mt-2'>
                            <Button onClick={AddQuantity}>Add</Button>
                          </div>
                        </div>


                      </div>

                      <div className="mt-4" >
                        {loading === true ?
                          (<Loader />) : (
                            <>
                              <Button title="Cancel" className="me-3" onClick={fallBack}>Cancel</Button>
                              <ButtonSimple title="Submit" type="btn btn-primary me-3" disabled={loading} />
                            </>
                          )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div >
        </section >
      </Modal>

    </div>
  )
}

export default AddProduct
