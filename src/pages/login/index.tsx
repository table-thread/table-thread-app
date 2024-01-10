/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import { logo } from '@/utils/image';

import LoginForm from '@/containers/LoginForm/LoginForm';

const Login = () => {

  return (
    <>

      <section className="" >
        <div className=" py-5 h-100" style={{ backgroundColor: "#f3f7ff" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-4 card " style={{ borderRadius: "1rem" }}>
                <div className="card-body p-4 ">
                  <div className="p-4 text-center mb-3">
                    <img src={logo} alt="logo" />
                  </div>
                  {/* <div className="login-box-divider my-4 text-center"><span className='mx-2'> or sign in with </span></div> */}

                  <LoginForm />

                </div>
              </div>
            </div>
          </div>
      </section>

    </>
  );
}

export default Login;