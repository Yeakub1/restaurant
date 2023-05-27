import React, { useContext, useEffect, useRef, useState } from "react";
import img from "../../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [desiable, setDesiable] = useState(true);

  const { signIn } = useContext(AuthContext);
    
    
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
    
    const handleGoogleSignIn = () => {
          
      };

  const handleLoginFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
      console.log(email, password);
      
      signIn(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
          })
      .catch(error=> console.log(error))
  };

  const handleValidateCaptcha = () => {
    const user_captch_value = captchaRef.current.value;
    if (validateCaptcha(user_captch_value)) {
      setDesiable(false);
    }
  };

  return (
    <div className=" max-w-7xl mx-auto hero min-h-screen bg-base-200">
      <div className=" md:flex justify-end items-center md:px-24">
        <div className="w-1/2 ">
          <div className="card  flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginFrom} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  type="text"
                  name="captcha"
                  required
                  ref={captchaRef}
                  placeholder="Type The Captcha"
                  className="input input-bordered"
                />
                <button onClick={handleValidateCaptcha} className="btn btn-xs">
                  validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={desiable}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <button
              onClick={handleGoogleSignIn}
              className="py-2 mb-5 w-full flex items-center justify-center font-semibold  "
            >
              <img
                width="20"
                height="20"
                className="mr-2"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              <p>Sign In With Google</p>
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <img className="" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
