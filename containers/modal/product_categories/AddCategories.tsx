import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';
import ToastComponent from '@/component/Toast/Toast';

import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';



import { categorySchemaNewCategory } from '@/utils/schema';

const TAG = "Add Categories modal page: ";

const AddCategories = (props: any) => {

  const router = useRouter();

  const { openModal, setOpenModal, addCategorie } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [initialState, setinitialState] = useState<any>({
    category: "",
    date: "",
  });


  const handleCancel = () => {
    setOpenModal(false);
  };

  async function callAsync(formValues: any) {
    console.log(formValues);

    const onlyApiData = {
      category: formValues.category,
      date:formValues.date,
    }
    addCategorie((prev: any) => [...prev, onlyApiData])
    console.log(onlyApiData);
    handleCancel();
    // registerCall(onlyApiData);
  }

  async function registerCall(addJson: any): Promise<void> {

    NetworkOps.makePostRequest(endPoints.addCategory, addJson, false)
      .then(async (response: any) => {
        console.log(TAG, ' login response ', response);
        if (response?.status == 200 && response?.data?.success == true) {
          // ToastComponent(response?.data?.msg);
          console.log("this is category data " ,response ,response?.data?.data?.userData )
          // router.push('/home');
        } else if (response?.status == 200 && response?.data?.success == false) {
          setLoading(false);
          // localStorage.setItem('otpmobile', JSON.stringify(response?.data?.data));
          // ToastComponent(response?.data?.msg);
          // router.push(`/signUp`);
          router.push('/home');
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

    handleCancel();
  }

  return (
    <>
      <Modal title="Add Product" open={openModal} onCancel={handleCancel} footer={[]} >
        <div className="row justify-content-center m-0" style={{ backgroundColor: "#f3f7ff" }}>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 py-3" >
            <Formik
              initialValues={initialState}
              validationSchema={categorySchemaNewCategory}
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
                        // onChangeEvent={(val: any) => { setFieldValue("category", val.target.value) }}
                        onChangeEvent={handleChange('category')}
                      />
                      {/* {JSON.stringify(errors.category)} */}
                      {errors.category && touched.category ? (<div className="in-error text-danger">{`${errors.category}`}</div>) : null}
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
                        // onChangeEvent={(val: any) => { setFieldValue("date", val.target.value) }}
                        onChangeEvent={handleChange('date')}
                      />
                      {/* {JSON.stringify(errors.date)} */}
                      {errors.date && touched.date ? (<div className="in-error text-danger">{`${errors.date}`}</div>) : null}
                    </div>

                  </div>

                  <div className="mt-4" >
                    {loading === true ?
                      <Loader /> :
                      <>
                        {/* <Button title='Cancel'  onClickEvent={() => setOpenModal(false)} /> */}
                        <Button title="Cancel" className="me-3" onClick={() => setOpenModal(false)}>Cancel</Button>
                        <ButtonSimple title="Submit" type="btn btn-primary me-3" disabled={loading} />
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

export default AddCategories
