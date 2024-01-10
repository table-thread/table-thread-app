/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';

import CustomInput from '@/component/input/input';
import CustomCheckbox from '@/component/checkbox/checkbox';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';
import ToastComponent from '@/component/Toast/Toast';
import Loader from '@/component/loader/loader';
import InputPassword from '@/component/inputpassword/inputpassword';

import { loginSchema } from '@/utils/schema';


import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';

import { removeplus91 } from '@/utils/helper';

const TAG = "Login: ";

const LoginForm = (props: any) => {

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: any = {
    role: "client",
    emailOrMobile: "",
    password: ""
  }

  async function callAsync(formValues: any) {
    // console.log(TAG, ' values for login ', formValues);
    setLoading(true);
    const apiData = {
      role: formValues?.role,
      email: formValues?.emailOrMobile.includes('@') ? formValues?.emailOrMobile.toLowerCase()  : `+91${removeplus91(formValues?.emailOrMobile)}`,
      password: formValues?.password
    }
    // console.log(TAG, ' generated values ', apiData);
    registerCall(apiData);
  }

  async function registerCall(addJson: any): Promise<void> {
    
    NetworkOps.makePostRequest(endPoints.login, addJson, false)
      .then(async (response: any) => {
        // console.log(TAG, ' login response ', response);
        if (response?.status == 200 && response?.data?.success == true) {

          // ToastComponent(response?.data?.msg);
          console.log("this is login data " ,response ,response?.data?.data?.userData )
          router.push('/modern');

        } else if (response?.status == 200 && response?.data?.success == false) {

          setLoading(false);
          localStorage.setItem('otpmobile', JSON.stringify(response?.data?.data));
          ToastComponent(response?.data?.msg);
          router.push(`/signUp`);

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
                  <CustomCheckbox  disabled={false} title="Remember me" />
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

        <div className="mt-4 text-center" >
          <span className="dont-acc" > {"New to Modernize?"} </span>  <span className="new-ac" > <Link href="/signUp" > Create account </Link></span>
        </div>

      </div>
    </>
  );
}

export default LoginForm;