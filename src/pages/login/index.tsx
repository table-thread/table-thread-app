import React from 'react';

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