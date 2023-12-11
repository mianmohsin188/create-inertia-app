

import logoImage from "../../images/logo.png";
import farmerImage from "../../images/farmerImage.png";

import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";


const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    errors.email = '';
    errors.password = '';







    post('/login', {
        onSuccess: () => {

          // Redirect to the dashboard or any other page after successful login
          // You can customize the redirect logic based on your application's needs

        },
      });

  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-7">
          <img
            src={farmerImage}
            alt="Farmer Avatar"
            style={{ width: "100%", height: "125%" }}
          />
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-12">
              <img
                src={logoImage}
                alt="Logo"
                style={{ width: "100px", height: "100px", padding: "10px" }}
              />
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                <h2 className="aft-logo-green">Digitt+</h2>
              </span>
            </div>
          </div>
          <div className="row m-0">
            <div className="card p-4 rounded">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors?.email?
                  <span className="text-danger">{errors.email}</span>
                  : ''
                  }

                  </div>
                  <div className="mt-2">
                    <label>Password:</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={(e) => setData('password', e.target.value)}
                    />
                      {errors?.password?
                          <span className="text-danger">{errors.password}</span>
                          : ''
                      }
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary mt-4 p-2  form-control" disabled={processing}>
                      {processing ? 'Logging In...' : 'Login'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
