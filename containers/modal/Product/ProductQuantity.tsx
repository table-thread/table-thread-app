import React, { Children, useState } from 'react';
import { Button } from 'antd';
import { Formik, Form } from 'formik';

import { ICBsTrash3Fill } from '@/utils/icons';

import CustomInput from '@/component/input/input';

import { productSchemaNewProduct, } from '@/utils/schema';


const TAG = 'Product Quantity'
const ProductQuantity = (props: any) => {

  const { deleteQuantity, id } = props;

  const [initialState, setinitialState] = useState<any>({
    productQuantity: "",
    amount: "",
  });

  async function callAsync(formValues: any) {
    const onlyApiData = {
      productQuantity: formValues.productQuantity,
      amount: `${formValues.amount} Rs`,
    };

    console.log(TAG, "Api Data to be send", onlyApiData);
  };

  // console.log(TAG, 'testing quantity');
  

  return (
    <>
      <section id="productQuantity" >
        <Formik
          initialValues={initialState}
          validationSchema={productSchemaNewProduct}
          onSubmit={(values) => {
            callAsync(values);
          }}
        >
          {({ errors, values, touched, handleChange, setFieldValue }) => (
            <Form className="w-100">

              <div className='row my-2'>
                <div className="col-5" >
                  <CustomInput
                    // label="Product Name"
                    id="productQuantity"
                    name="productQuantity"
                    placeholder="Product quantity"
                    type="text"
                    defaultValue={values.productQuantity}
                    disabled={false}
                    maxLength={250}
                    asterisk={true}
                    onChangeEvent={handleChange('productQuantity')}
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
                  <Button onClick={()=>deleteQuantity(id)}><ICBsTrash3Fill /></Button>
                </div>
              </div>

            </Form>
          )}
        </Formik>
      </section >
    </>
  )
}

export default ProductQuantity
