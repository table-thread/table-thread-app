import React, { useState } from 'react'
import { Modal } from 'antd';
import { Formik, Form } from 'formik';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';

import { productSchemaNewProduct } from '@/utils/schema';

const EditCategories: React.FC<any> = (props: any) => {

  const { openEditModal, setOpenEditModal, setProduct } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const [initialState, setinitialState] = useState<any>({
    category: openEditModal?.category ? openEditModal?.category : "",
    date: openEditModal?.date ? openEditModal?.date : "",
  });

  console.log("formValues", initialState);
  console.log("formValues", openEditModal);

  const handleCancel = () => {
    setOpenEditModal(null);
  };

  async function callAsync(formValues: any) {
    // console.log(formValues);
    const onlyApiData = {
      category: formValues.category,
      date: formValues.date,
    };

    setProduct((prev:any) =>[...prev,onlyApiData]);
    console.log(onlyApiData);
    handleCancel();
  };

  return (
    <>
      <Modal title="Add Product" open={openEditModal !== null ? true : false} onCancel={handleCancel} footer={[]} >
        <div className="row justify-content-center m-0" style={{ backgroundColor: "#f3f7ff" }}>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 py-3" >
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
                        <ButtonSimple title='Cancel' type='me-3 btn border' onClickEvent={handleCancel} />
                        <ButtonSimple title="Submit" type="btn btn-primary  me-3" onClickEvent={() => callAsync(values)} />
                      </>}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div >
      </Modal>
    </>
  )
}

export default EditCategories
