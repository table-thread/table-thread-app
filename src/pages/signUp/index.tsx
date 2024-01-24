import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link'

import CustomInput from '@/component/input/input';
import InputPassword from '@/component/inputpassword/inputpassword';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';
import ToastComponent from '@/component/Toast/Toast';
import Loader from '@/component/loader/loader';

import { passwordOnly, signupSchemaNewUser } from '@/utils/schema';
import { logo } from '@/utils/image';

import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';

const TAG = "Signup: ";
const Signup = () => {

  const router = useRouter();
  // const { messageApi, contextHolder } = ToastModular();

  const [isDisable, setDisable] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isNewUser, setIsNewUser] = useState<any>(true);

  const [initialState, setinitialState] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });


  async function callAsync(formValues: any) {

    const onlyApiData = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      mobile: `+91${formValues.mobile}`,
      password: formValues.password,
    }

    console.log(TAG , onlyApiData);
    registerCall(onlyApiData);
  }



  async function registerCall(addJson: any): Promise<void> {
    // console.log(addJson);
    setLoading(true);

    NetworkOps.makePostRequest(endPoints.signup, addJson, false)
      .then(async (response: any) => {
        console.log(response);
        setLoading(false);

        if (response?.status == 200 && response?.data?.success == true) {

          ToastComponent(response?.data?.msg);
          localStorage.setItem('otpmobile', JSON.stringify(response?.data?.data));
          if (isNewUser == true) {
            router.push(`/login`);
          }
          console.log(TAG, ' error got in else ', response?.data?.msg);

        } else {
          ToastComponent(response?.data?.msg);
          console.log(TAG, ' error got in else t');
        }
      })
      .catch((error: any) => {
        setLoading(false);
        error?.data?.msg ? ToastComponent(error?.data?.msg) : null;
        console.log(TAG, ' error i got in catch ', error);
      });
  }



  return (

    <section id="loginWrapper" >
      <div className="row justify-content-center m-0" style={{ backgroundColor: "#f3f7ff" }}>
        <div className="col-lg-5 col-11 card p-5 mt-5" style={{ borderRadius: "1rem" }}>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
            <div className="a-t-h text-center" >
              <Image src={logo} alt="logo" width={232} height={36} />
            </div>

            <div className="pt-5 a-input-wrapper" >
              <Formik
                initialValues={initialState}
                validationSchema={isDisable == true ? passwordOnly : signupSchemaNewUser}
                onSubmit={values => {
                  callAsync(values);
                }}
              >
                {({ errors, values, touched, handleChange, setFieldValue }) => (
                  <Form className="w-100">
                    <div className="row gy-2 gx-3" >
                      <div className="col-lg-6 col-12" >
                        <CustomInput
                          label="First Name"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                          defaultValue={values.firstName}
                          disabled={loading ? loading : isDisable}
                          maxLength={250}
                          asterisk={true}
                          onChangeEvent={(val: any) => { setFieldValue("firstName", val.target.value) }}
                        />
                        {errors.firstName && touched.firstName ? (<div className="in-error">{`${errors.firstName}`}</div>) : null}
                      </div>

                      <div className="col-lg-6 col-12" >
                        <CustomInput
                          label="Last Name"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                          defaultValue={values.lastName}
                          disabled={loading ? loading : isDisable}
                          asterisk={true}
                          maxLength={250}
                          onChangeEvent={(val: any) => { setFieldValue("lastName", val.target.value) }}
                        />
                        {errors.lastName && touched.lastName ? (<div className="in-error">{`${errors.lastName}`}</div>) : null}
                      </div>

                      <div className="col-lg-6 col-12" >
                        <CustomInput
                          label="Mobile Number"
                          id="mobile"
                          name="mobile"
                          placeholder="Mobile Number"
                          type="number"
                          disabled={loading}
                          maxLength={10}
                          defaultValue={values.mobile}
                          asterisk={true}
                          onChangeEvent={(val: any) => { setFieldValue("mobile", val.target.value) }}
                        />
                        {errors.mobile && touched.mobile ? (<div className="in-error">{`${errors.mobile}`}</div>) : null}
                      </div>

                      <div className="col-12" >
                        <CustomInput
                          label="Email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          defaultValue={values.email}
                          disabled={loading ? loading : isDisable}
                          maxLength={250}
                          asterisk={false}
                          onChangeEvent={(val: any) => { setFieldValue("email", val.target.value) }}
                        />
                        {errors.email && touched.email ? (<div className="in-error">{`${errors.email}`}</div>) : null}
                      </div>

                      <div className="col-lg-6 col-12" >
                        <InputPassword
                          label={isDisable == true ? "Enter your already Created Password" : "Password"}
                          id="password"
                          name="password"
                          placeholder={isDisable == true ? "Enter your already Created Password" : "Password"}
                          type="password"
                          disabled={loading}
                          maxLength={100}
                          asterisk={true}
                          onChangeEvent={(val: any) => { setFieldValue("password", val.target.value) }}
                        />
                        {errors.password && touched.password ? (<div className="in-error">{`${errors.password}`}</div>) : null}
                      </div>

                      {isDisable == false ?
                        <div className="col-lg-6 col-12" >
                          <InputPassword
                            label="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            disabled={loading}
                            maxLength={100}
                            asterisk={true}
                            onChangeEvent={(val: any) => { setFieldValue("confirmPassword", val.target.value) }}
                          />
                          {errors.confirmPassword && touched.confirmPassword ? (<div className="in-error">{`${errors.confirmPassword}`}</div>) : null}
                        </div>
                        : ""}
                    </div>

                    <div className="mt-4" >
                      {loading === true ?
                        <Loader /> :
                        <ButtonSimple title="Continue" type="btn btn-primary py-2 fs-4 w-100" />}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="mt-4 text-center" >
              <span className="dont-acc" > {"Already Register?"} </span> <Link href="login" > <span className="new-ac" >Login</span> </Link>
            </div>
          </div>
        </div >
      </div >
    </section >
  );
}

export default Signup;