import React, { useState } from 'react';

import { Modal, Button } from 'antd';
import { Formik, Form } from 'formik';

import { productSchemaNewProduct, } from '@/utils/schema';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';

import ProductQuantity from './ProductQuantity';

const EditProduct = (props: any) => {

  const { openEditModal, setEditModalOpen } = props
  
  const [rows, setRows] = useState<Record<string, string | number>[]>([{}]);
  const [loading, setLoading] = useState<boolean>(false);

  const [initialState, setinitialState] = useState<any>({
    productName: "",
    productType: "",
    category: "",
    amount: "",
    image: "",
  });


  async function callAsync(formValues: any) {
    // console.log(TAG, "Form Values", formValues);
    const onlyApiData = {
      productName: formValues.productName,
      productType: formValues.productType,
      category: formValues.category,
      amount: `${formValues.amount} Rs`,
      image: formValues.image,
      productQuantity: rows
    };

    console.log("Api Data to be send", onlyApiData);
    setEditModalOpen(false)
  };

  const handleAddRow = () => {
    const newRow = {};
    setRows([...rows, newRow]);
  };

  const handleRemoveSpecificRow = (idx: number) => {
    const tempRows = [...rows];

    // Remove the row at the specified index
    tempRows.splice(idx, 1);

    // Update the state with the modified rows  array
    setRows(tempRows);
  };

  const updateState = (e: React.ChangeEvent<HTMLInputElement>, index: number, column: string) => {
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
    <>
      <Modal title="Edit Product" visible={openEditModal} onCancel={() => setEditModalOpen(false)} footer={null}>
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
                        <Button title="Cancel" className="me-3" onClick={() => setEditModalOpen(false)}>Cancel</Button>
                        <ButtonSimple title="Submit" type="btn btn-primary me-3" disabled={loading} />
                      </>
                    )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default EditProduct;
