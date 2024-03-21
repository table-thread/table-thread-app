/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';

import CustomInput from '@/component/input/input';
import CustomCheckbox from '@/component/checkbox/checkbox';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';
import InputPassword from '@/component/inputpassword/inputpassword';
import ToastComponent from '@/component/Toast/Toast';
import Loader from '@/component/loader/loader';

import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';

import { loginSchema } from '@/utils/schema';
import { removeplus91 } from '@/utils/helper';
import { object } from 'yup';
import { json } from 'node:stream/consumers';

const TAG = "Login: ";

const LoginForm = (props: any) => {

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [logindata, setLogindata] = useState<any>();

  const initialValues: any = {
    role: "client",
    emailOrMobile: "",
    password: ""
  }

  // console.log("login response deta : ", logindata);
  // logindata.forEach((element: any) => {
  // console.log("login response deta : ", element.adminData._id);
  // console.log("login response deta : ", element.token.token);
  // });


  async function callAsync(formValues: any) {
    // console.log(TAG, ' values for login ', formValues);
    // setLoading(true);
    const apiData = {
      role: 'admin',
      email: formValues?.emailOrMobile.includes('@') ? formValues?.emailOrMobile.toLowerCase() : `+91${removeplus91(formValues?.emailOrMobile)}`,
      password: formValues?.password
    }
    console.log(TAG, ' generated values ', apiData);
    registerCall(apiData);
  }


  async function registerCall(addJson: any): Promise<void> {
    NetworkOps.makePostRequest(endPoints.login, addJson, false)
      .then(async (response: any) => {
        // console.log(TAG, ' login response ', response);
        if (response?.status == 200 && response?.data?.success == true) {

          ToastComponent(response?.data?.message);
          console.log("this is login data " ,response ,response?.data?.data?.userData )
          const sessionAdminData = {};
          const sessionTokenData = {};
          // Object.assign(sessionData, { cookie: response?.data?.data?.cookie });
          Object.assign(sessionAdminData, { loginData: response?.data?.data[0].adminData });
          Object.assign(sessionTokenData, { loginData: response?.data?.data[0].token });
          // Object.assign(sessionData, { userLicense: response?.data?.data?.license });
          
          localStorage.setItem('adminData', JSON.stringify(sessionAdminData));
          localStorage.setItem('adminTokenData', JSON.stringify(sessionTokenData));
          router.push('/home');


        } else if (response?.status == 200 && response?.data?.success == false) {

          setLoading(false);
          // localStorage.setItem('otpmobile', JSON.stringify(response?.data?.data));
          ToastComponent(response?.data?.message);
          // router.push(`/mobile-verify`);

        } else {
          setLoading(false);
          ToastComponent(response?.data?.message);
          console.log(TAG, ' error got in else ');
        }
      })
      .catch((error: any) => {
        setLoading(false);
        error?.data?.msg ? ToastComponent(error?.data?.message) : null;
        console.log(TAG, ' error i got in catch ', error);
      });
  }


  return (
    <>
      <div className="pt-3 a-input-wrapper" >
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={values => {
            callAsync(values);
          }}
        >
          {({ errors, values, touched, handleChange, setFieldValue }) => (
            <Form className="w-100">
              <div className="mt-1" >
                <CustomInput
                  label="Email/Mobile No."
                  id="emailOrMobile"
                  name="emailOrMobile"
                  placeholder="Email/Mobile No."
                  type="text"
                  // disabled={loading}
                  maxLength={250}
                  asterisk={true}
                  onChangeEvent={handleChange('emailOrMobile')}
                />
                {errors.emailOrMobile && touched.emailOrMobile ? (<div className="in-error">{`${errors.emailOrMobile}`}</div>) : null}
              </div>

              <div className="mt-3" >
                <InputPassword
                  label="Password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  // disabled={loading}
                  maxLength={16}
                  asterisk={true}
                  onChangeEvent={handleChange('password')}
                />
                {errors.password && touched.password ? (<div className="in-error">{`${errors.password}`}</div>) : null}
              </div>

              <div className="mt-4 d-flex justify-content-between" >
                <div className="w-auto" >
                  <CustomCheckbox disabled={false} title="Remember me" />
                </div>
                <div className="w-auto" >
                  <span className="forgot" > <Link href="forgot-password" > Forgot Password ? </Link> </span>
                </div>
              </div>

              <div className="mt-4" >
                {loading === true ?
                  <Loader /> :
                  <ButtonSimple title="Log In" type="btn btn-primary py-2 fs-4 w-100" />
                }
              </div>
            </Form>
          )}
        </Formik>

      </div>
    </>
  );
}

export default LoginForm;