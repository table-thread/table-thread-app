import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

import { Button, Card, Modal, Input } from 'antd';

import { ICIoEye, ICIoEyeOff, ICMdEdit, ICBsTrash3Fill } from '@/utils/icons';
import { productSchemaNewProduct, } from '@/utils/schema';
import { Formik, Form } from 'formik';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';



const Product = () => {

  const [product, setProduct] = useState(
    [
      {
        productName: 'Chiken Tikka',
        productType: 'Non-veg',
        category: 'Starter',
        amount: '80 Rs',
      },
      {
        productName: 'Momos',
        productType: 'veg',
        category: 'Fast-food',
        amount: '60 Rs',
      },
      {
        productName: 'Chicken Momos',
        productType: 'Non-veg',
        category: 'Fast-food',
        amount: '85 Rs',
      },
      {
        productName: 'Chiken role',
        productType: 'Non-veg',
        category: 'Fast-food',
        amount: '120 Rs',
      },
      {
        productName: 'Panner Tikka',
        productType: 'veg',
        category: 'Starter',
        amount: '70 Rs',
      },
      {
        productName: 'Chiken Tikka',
        productType: 'Non-veg',
        category: 'Starter',
        amount: '80 Rs',
      },
    ]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisable, setDisable] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageView, setImageView] = useState<boolean>(false);

  const [initialState, setinitialState] = useState<any>({
    productName: "",
    productType: "",
    category: "",
    amount: "",
    image: "",
  });


  // useEffect(() => {
  //   const items = localStorage.getItem('foodProduct')
  //   const parsedItems = JSON.parse(items);
  //   if (items) {
  //     console.log(parsedItems);
  //     setProduct((prev) => [...prev, parsedItems])
  //     // setProduct([parsedItems])
  //     // setProduct(parsedItems);
  //   }
  // }, [0])

  // useEffect(() => {
  //   localStorage.setItem('foodProduct', JSON.stringify(product));
  // }, [product]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function callAsync(formValues: any) {
    // console.log(formValues);

    const onlyApiData = {
      productName: formValues.productName,
      productType: formValues.productType,
      category: formValues.category,
      amount: `${formValues.amount} Rs`,
      image: formValues.image,
    }

    console.log(onlyApiData);
    setProduct((prev) => [...prev, onlyApiData]);
    // registerCall(onlyApiData)
    setIsModalOpen(false);
  }

  // async function registerCall(addJson: any): Promise<void> {
  //   console.log(addJson);
  //   setLoading(true);

  //   if (addJson) {
  //     localStorage.setItem('foodProduct', JSON.stringify(product));
  //     setLoading(false);
  //     setIsModalOpen(false);
  //   }
  // };

  // console.log(product);


  return (
    <HomeLayout>
      <div>
        <div className='col-12'>
          <Card className='mb-4 ps-3 box-shadow'>
            <div className='d-flex justify-content-between align items-center mb-5'>
              <div className='fw-bold fs-4 ' >Products</div>
              <Button onClick={showModal}>Add New Product</Button>
              <Modal title="Add Product" open={isModalOpen} footer={[
              ]}>
                <section id="loginWrapper" >

                  <div className="row justify-content-center m-0" style={{ backgroundColor: "#f3f7ff" }}>
                    {/* {contextHolder} */}

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
                                    disabled={loading ? loading : isDisable}
                                    maxLength={250}
                                    asterisk={true}
                                    onChangeEvent={(val: any) => { setFieldValue("productName", val.target.value) }}
                                  />
                                  {JSON.stringify(errors.productName)}
                                  {/* {errors.productName && touched.productName ? (<div className="in-error">{`${errors.productName}`}</div>) : null} */}
                                </div>

                                <div className="col-12" >
                                  <CustomInput
                                    label="Product Type"
                                    id="productType"
                                    name="productType"
                                    placeholder="Product Type"
                                    type="text"
                                    defaultValue={values.productType}
                                    disabled={loading ? loading : isDisable}
                                    asterisk={true}
                                    maxLength={250}
                                    onChangeEvent={(val: any) => { setFieldValue("productType", val.target.value) }}
                                  />
                                  {JSON.stringify(errors.productType)}
                                  {/* {errors.productType && touched.productType ? (<div className="in-error">{`${errors.productType}`}</div>) : null} */}
                                </div>

                                <div className="col-12" >
                                  <CustomInput
                                    label="Product Category"
                                    id="category"
                                    name="category"
                                    placeholder="product Category"
                                    type="text"
                                    disabled={loading}
                                    maxLength={250}
                                    defaultValue={values.category}
                                    asterisk={true}
                                    onChangeEvent={(val: any) => { setFieldValue("category", val.target.value) }}
                                  />
                                  {JSON.stringify(errors.category)}
                                  {/* {errors.category && touched.category ? (<div className="in-error">{`${errors.category}`}</div>) : null} */}
                                </div>

                                <div className="col-12" >
                                  <CustomInput
                                    label="Amount"
                                    id="amount"
                                    name="amount"
                                    placeholder="Amount"
                                    type="number"
                                    disabled={loading}
                                    maxLength={10}
                                    defaultValue={values.amount}
                                    asterisk={true}
                                    onChangeEvent={(val: any) => { setFieldValue("amount", val.target.value) }}
                                  />
                                  {JSON.stringify(errors.amount)}
                                  {/* {errors.amount && touched.amount ? (<div className="in-error">{`${errors.amount}`}</div>) : null} */}
                                </div>

                                <div className="col-12" >
                                  <CustomInput
                                    label="upload image"
                                    id="image"
                                    name="image"
                                    placeholder="image"
                                    type="file"
                                    defaultValue={values.image}
                                    disabled={loading ? loading : isDisable}
                                    maxLength={250}
                                    asterisk={false}
                                    onChangeEvent={(val: any) => { setFieldValue("image", val.target.value) }}
                                  />
                                  {JSON.stringify(errors.image)}
                                  {/* {errors.image && touched.image ? (<div className="in-error">{`${errors.image}`}</div>) : null} */}
                                </div>
                              </div>

                              <div className="mt-4" >
                                {loading === true ?
                                  <Loader /> :
                                  <>
                                    {/* <Button className='me-3' ></Button> */}
                                    <ButtonSimple title="Cancel" type="btn btn-primary py-2 fs-4 me-3" onClick={handleCancel} />
                                    <ButtonSimple title="Submit" type="btn btn-primary py-2 fs-4 me-3" />
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
            </div>
            <div className='row border-bottom pb-3'>
              <div className='col-2 fw-bold'>Sr. No</div>
              <div className='col-2 fw-bold'>Name</div>
              <div className='col-2 fw-bold'>Product type</div>
              <div className='col-2 fw-bold'>Category</div>
              <div className='col-2 fw-bold'>Amount(Inr)</div>
              <div className='col-2 fw-bold'>View</div>
            </div>


            {product.map((item, index) => {
              return (
                <div className='row border-bottom align-items-center'>
                  <div className='col-2 my-3 fw-bolder'>
                    {index + 1}
                  </div>
                  <div className='col-2'>{item.productName}</div>
                  <div className='col-2'>{item.productType}</div>
                  <div className='col-2'>{item.category}</div>
                  <div className='col-2'>{item.amount}</div>
                  <div className='col-2 d-flex gap-3'>
                    <div onClick={() => setImageView(!imageView)}>
                      {imageView ? <ICIoEyeOff /> : <ICIoEye />}
                    </div>
                    <div onClick={() => setImageView(!imageView)}>
                      {<ICMdEdit />}
                    </div>
                    <div onClick={() => setImageView(!imageView)}>
                      {<ICBsTrash3Fill />}
                    </div>
                  </div>
                </div>
              )
            })}
          </Card>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Product;
