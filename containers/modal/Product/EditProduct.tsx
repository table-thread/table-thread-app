import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { Formik, Form } from 'formik';
import { ICBsTrash3Fill } from '@/utils/icons';
import { productSchemaNewProduct } from '@/utils/schema';
import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';

const TAG = 'modal product edit';

const EditProduct: React.FC<any> = (props: any) => {

  const { openEditModal, setEditModalOpen, productToEdit, updateProduct } = props

  // const [rows, setRows] = useState<Record<string, string | number>[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialState, setInitialState] = useState<any>({
      productName: openEditModal?.productName ? openEditModal?.productName : "",
      productType: openEditModal?.productType ? openEditModal?.productType : "",
      category: openEditModal?.productType ?  openEditModal?.productType : "",
      amount: "",
      image: ""
  });


  console.log(' openEditModal ', openEditModal);
  console.log(' initialState ', initialState);


  const fallBack = () => {
    setEditModalOpen(false);
  };

  async function callAsync(formValues: any) {
    // Update local storage data
    const updatedProduct = {
      ...initialState,
      productName: formValues.productName,
      productType: formValues.productType,
      category: formValues.category,
      amount: formValues.amount,
      image: formValues.image,
      // productQuantity: rows
    };

    localStorage.setItem('productData', JSON.stringify(updatedProduct));
    updateProduct(updatedProduct);
    fallBack();
  };

  // const columnsArray = ["quantity", "quantityPrice"];

  // const handleAddRow = () => {
  //   const newRow = {};
  //   setRows([...rows, newRow]);
  // };

  // const handleRemoveSpecificRow = (idx: number) => {
  //   const tempRows = [...rows];
  //   tempRows.splice(idx, 1);
  //   setRows(tempRows);
  // };

  // const updateState = (e: React.ChangeEvent<HTMLInputElement>, index: number, column: string) => {
  //   const newValue = e.target.value;

  //   const updatedRows = rows.map((row, rowIndex) => {
  //     if (rowIndex === index) {
  //       return { ...row, [column]: newValue };
  //     }
  //     return row;
  //   });

  //   setRows(updatedRows);
  // };

  console.log("initialState", initialState);

  return (
    <div className=''>
      <Modal title="Edit Product" open={openEditModal !== null ? true : false} onCancel={() => setEditModalOpen(null)} footer={null}>
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

                  </div>

                  {/* Quantity rows */}
                  {/* <div className='row my-2'>
                    <div className="col-5 fw-bold text-center">Quantity</div>
                    <div className="col-5 fw-bold text-center">Price</div>
                    {rows.map((item, idx) => (
                      <div className='row my-2' key={idx}>
                        {columnsArray.map((column, index) => (
                          <div className="col-5" key={index}>
                            <CustomInput
                              id="quantity"
                              name="quantity"
                              placeholder="quantity"
                              type="text"
                              value={item[column] || ''}
                              disabled={false}
                              maxLength={250}
                              asterisk={false}
                              onChangeEvent={(e: any) => updateState(e, idx, column)}
                            />
                          </div>
                        ))}
                        <div className='col-2'>
                          <Button
                            className="btn btn-sm"
                            onClick={() => handleRemoveSpecificRow(idx)}
                          >
                            <ICBsTrash3Fill />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className='clo-2'>
                      <Button onClick={handleAddRow}>
                        Add Row
                      </Button>
                    </div>
                  </div> */}
                  <div className="col-12 my-2 d-flex justify-content-end" >
                    {loading === true ?
                      (<Loader />) : (
                        <>
                          <Button title="Cancel" className="me-3" onClick={() => setEditModalOpen(false)}>Cancel</Button>
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

export default EditProduct;
