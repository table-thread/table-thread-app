import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

import { Button, Card, Modal } from 'antd';

import { ICIoEye, ICIoEyeOff, ICMdEdit, ICBsTrash3Fill, ICGiNotebook, ICFaCheckCircle } from '@/utils/icons';
import { productSchemaNewProduct, } from '@/utils/schema';
import { Formik, Form } from 'formik';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';



const Order = () => {

  const [product, setProduct] = useState(
    [
      {
        orderId: '55LB5FWQ',
        totalAmount: '1255',
        items: 10
      },
      {
        orderId: '77LB2FWQ',
        totalAmount: '1124',
        items: 15
      },
      {
        orderId: '53HB5FWQ',
        totalAmount: '845',
        items: 4
      },
    ]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [isDisable, setDisable] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialState, setinitialState] = useState<any>({
    category: "",
    date: "",
  });


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditOpen(false);
    setDeleteOpen(false);
  };

  async function callAsync(formValues: any) {
    // console.log(formValues);

    const onlyApiData = {
      category: formValues.category,
      date: formValues.date,
    }

    console.log(onlyApiData);
    setProduct((prev: any) => [...prev, onlyApiData]);
    setinitialState({

    })
    setIsModalOpen(false);
  }

  const handleDeleteItem = (item: any) => {
    const newProductItems = product.filter((iten, index) => index !== item)
    console.log(newProductItems);
    setProduct(newProductItems);
    setDeleteOpen(false);
  }

  const setDeleteOpenfn = (item: any,) => {
    console.log(item);
    setDeleteOpen(true)
    // handleDeleteItem(item)
  }


  return (
    <HomeLayout>
      <div>
        <div className='col-12'>
          <Card className='mb-4 ps-3 box-shadow'>
            <div className='d-flex justify-content-between align items-center mb-5'>
              <div className='fw-bold fs-4' >Order Details</div>
              {/* <Button onClick={showModal}>Add New Product</Button> */}
              {/* <Modal title="Add Product" open={isModalOpen} onCancel={handleCancel} footer={[]} >
                <div className="row justify-content-center m-0" style={{ backgroundColor: "#f3f7ff" }}>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-12 py-3" >
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
                            </div>

                            <div className="col-12" >
                              <CustomInput
                                label="Date"
                                id="date"
                                name="date"
                                placeholder="date"
                                type="date"
                                disabled={loading}
                                maxLength={10}
                                defaultValue={values.date}
                                asterisk={true}
                                onChangeEvent={(val: any) => { setFieldValue("date", val.target.value) }}
                              />
                              {JSON.stringify(errors.date)}
                            </div>

                          </div>

                          <div className="mt-4" >
                            {loading === true ?
                              <Loader /> :
                              <>
                                <ButtonSimple title='Cancel' type='me-3 btn border' onClickEvent={() => setIsModalOpen(false)} />
                                <ButtonSimple title="Submit" type="btn btn-primary  me-3" onClickEvent={() => callAsync(values)} />
                              </>}
                          </div>

                        </Form>
                      )}
                    </Formik>

                  </div>
                </div >
              </Modal> */}
            </div>
            <div className='row border-bottom pb-3'>
              <div className='col-2 fw-bold'>Sr. No</div>
              <div className='col-2 fw-bold'>Order ID</div>
              <div className='col-2 fw-bold'>Table</div>
              {/* <div className='col-2 fw-bold'>View Order</div> */}
              <div className='col-2 fw-bold'>Total Amount</div>
              <div className='col-2 fw-bold'>Paid Amount</div>
              <div className='col-2 fw-bold'>status</div>
              {/* <div className='col-2 fw-bold'>status</div> */}
            </div>


            {product.map((item, index) => {
              return (
                <div className='row border-bottom align-items-center'>
                  <div className='col-2'>{index + 1}</div>
                  <div className='col-2 my-3 fw-bolder'>
                    {item.orderId}
                  </div>
                  <div className='col-2'>{index + 1}</div>
                  {/* <div className='col-2'><ICGiNotebook /></div> */}
                  <div className='col-2'>{item.totalAmount}</div>
                  <div className='col-2'>-</div>
                  <div className='col-2 d-flex gap-3'>
                    {/* <div className='table-icons mb-3' > */}
                    <div onClick={() => setEditOpen(true)}><ICFaCheckCircle /></div>
                    {/* </div> */}
                    {/* <div className='table-icons'>
                      <div onClick={() => setDeleteOpenfn(index)}><ICBsTrash3Fill /></div>
                    </div> */}
                  </div>

                </div>
              )
            })}
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
                            </div>

                            <div className="col-12" >
                              <CustomInput
                                label="Date"
                                id="date"
                                name="date"
                                placeholder="date"
                                type="date"
                                disabled={loading}
                                maxLength={10}
                                defaultValue={values.date}
                                asterisk={true}
                                onChangeEvent={(val: any) => { setFieldValue("date", val.target.value) }}
                              />
                              {JSON.stringify(errors.amount)}
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
          <Modal title="Delete Item" open={deleteOpen} onCancel={handleCancel} onOk={() => handleDeleteItem} >
            <p>for delete item click ok</p>
          </Modal>
        </>
      </div>
    </HomeLayout>
  )
}

export default Order;
