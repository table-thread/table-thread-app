/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import { logo } from '@/utils/image';

const SignIn = () => {






  return (
    <>

      <section className="" style={{ backgroundColor: "#f3f7ff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="login-box ">
              <div className="card " style={{ borderRadius: "1rem" }}>
                <div className="card-body p-4 ">
                  <div className="p-4 text-center mb-3">
                    <img src={logo} alt="logo" />
                  </div>
                  {/* <div className="login-box-divider my-4 text-center"><span className='mx-2'> or sign in with </span></div> */}

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="typeFirstName"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="typeLastName"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check mb-4">
                    <div>
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form1Example3"
                      />
                      <label className="form-check-label" htmlFor="form1Example3">Remeber this Device</label>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block w-100" type="submit">sign in</button>
                  <div className='text-center mt-3'>New to Modernize? <Link href='/login'>Log In</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default SignIn;