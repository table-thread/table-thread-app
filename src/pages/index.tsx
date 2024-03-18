import React from 'react';

import LoginForm from '@/containers/LoginForm/LoginForm';

import { logo } from '@/utils/image';

const Login = () => {

  return (
    <section className="" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-5 col-md-6 col-sm-8 col col-11 card box-shadow">
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
  );
}

export default Login;