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
import PaginationComponent from '@/component/pagination/pagination';


import { aaluTikki, chickenMomos } from '@/utils/image';


const Product = () => {

  const [product, setProduct] = useState(
    [
      {
        productName: 'Chiken Tikka',
        productType: 'Non-veg',
        category: 'Starter',
        amount: '80 Rs',
        image: aaluTikki,
      },
      {
        productName: 'Chiken Tikka',
        productType: 'Non-veg',
        category: 'Starter',
        amount: '80 Rs',
        image: aaluTikki,
      },
      {
        productName: 'Momos',
        productType: 'veg',
        category: 'Fast-food',
        amount: '60 Rs',
        image: chickenMomos,
      },
      {
        productName: 'Chicken Momos',
        productType: 'Non-veg',
        category: 'Fast-food',
        amount: '85 Rs',
        image: chickenMomos,
      },
      {
        productName: 'Chiken role',
        productType: 'Non-veg',
        category: 'Fast-food',
        amount: '120 Rs',
        image: chickenMomos,
      },
      {
        productName: 'Panner Tikka',
        productType: 'veg',
        category: 'Starter',
        amount: '70 Rs',
        image: aaluTikki,
      },
      {
        productName: 'Chiken Tikka',
        productType: 'Non-veg',
        category: 'Starter',
        amount: '80 Rs',
        image: aaluTikki,
      },
      {
        productName: 'Chiken role',
        productType: 'Non-veg',
        category: 'Fast-food',
        amount: '120 Rs',
        image: chickenMomos,
      },
      {
        productName: 'Panner Tikka',
        productType: 'veg',
        category: 'Starter',
        amount: '70 Rs',
        image: aaluTikki,
      },
      {
        productName: 'Chiken Tikka',
        productType: 'Non-veg',
        category: 'Starter',
        amount: '80 Rs',
        image: aaluTikki,
      },
      {
        productName: 'Chiken Tikka',
        productType: 'Non-veg',
        category: 'Starter',
        amount: '80 Rs',
        image: aaluTikki,
      },
      {
        productName: 'Momos',
        productType: 'veg',
        category: 'Fast-food',
        amount: '60 Rs',
        image: chickenMomos,
      },
    ]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [defaultPageSize, setDefaultPageSize] = useState<number>(10);
  const [defaultCurrent, setDefaultCurrent] = useState<number>(1);

  const [isDisable, setDisable] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialState, setinitialState] = useState<any>({
    productName: "",
    productType: "",
    category: "",
    amount: "",
    image: "",
  });


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditOpen(false);
    setDeleteOpen(false);
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
    setIsModalOpen(false);
  }

  const callPaginationAction = (page: number, limit: number) => {
    setDefaultCurrent(page);
    setDefaultPageSize(limit);
  };

  const handleDeleteItem = () => {

    setDeleteOpen(false);
  }

  return (
    <HomeLayout>
      <div>
        <div className='col-12'>
          <Card className='mb-4 box-shadow'>
            <div className='d-flex justify-content-between align items-center mb-4'>
              <div className='fw-bold fs-4 ' >Products</div>
              <Button onClick={showModal}>Add New Product</Button>
              <Modal title="Add Product" open={isModalOpen} onCancel={handleCancel} footer={[
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
                                    <Button title="Cancel" className="me-3" onClick={handleCancel}>Cancel</Button>
                                    <ButtonSimple title="Submit" type="btn btn-primary  me-3" />
                                    {/* <button title="Submit" className="btn btn-primary  me-3">Submitttt</button> */}
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
            <div className='row border-top gy-4 py-3'>

              {product.map((item, index) => {
                return (
                  <div className='col-3'>
                    <Card className='py-3' hoverable bodyStyle={{ padding: 0 }}>
                      <img style={{ height: 200, width: '100%', objectFit: 'cover' }} alt="example" src={item.image} />
                      <div className='px-3'>
                        <h5 className='m-0 mt-2'>{item.productName}</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic modi non facere earum.</p>
                        <div className='d-flex justify-content-between'>
                          <div>
                            <p className='m-0'><span className='fw-bold'>Categery: </span> {item.category}</p>
                            <p className='m-0'><span className='fw-bold'>Type: </span> {item.productType}</p>
                            <p className='m-0'><span className='fw-bold'>Amount: </span> {item.amount}</p>
                          </div>
                          <div className='me-2'>
                            <div className='table-icons mb-3' >
                              <div onClick={() => setEditOpen(true)}><ICMdEdit /></div>
                            </div>
                            <div className='table-icons'>
                              <div onClick={() => setDeleteOpen(true)}><ICBsTrash3Fill /></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
              
              <PaginationComponent
                total={product.length}
                defaultCurrent={defaultCurrent}
                defaultPageSize={defaultPageSize}
                onChange={callPaginationAction}
                onShowSizeChange={callPaginationAction}
              />;
            </div>
          </Card>
        </div>
        <>
          <Modal title="Edit   Product" open={editOpen} onCancel={handleCancel} footer={[
          ]}>
            <section id="editWrapper" >

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
                                <Button title="Cancel" className="me-3" onClick={() => setEditOpen(false)}>Cancel</Button>
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

          <Modal title="Delete Item" open={deleteOpen} onCancel={handleCancel} onOk={handleDeleteItem} >
            <p>for delete item click ok</p>
          </Modal>
        </>
      </div>
    </HomeLayout>
  )
}

export default Product;
