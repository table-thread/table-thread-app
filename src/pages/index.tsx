import React from 'react';

import LoginForm from '@/containers/LoginForm/LoginForm';

import { logo } from '@/utils/image';

const Login = () => {

  return (
    <section className="" >
      <div className="container py-5 h-100" style={{ backgroundColor: "#f3f7ff" }}>
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
  );
}

export default Login;