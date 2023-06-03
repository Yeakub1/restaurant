import React, { useContext } from 'react';
import img from "../../../assets/others/authentication1.png";
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
 

const Registion = () => {
 const {
   register,
   handleSubmit,
   reset,
   formState: { errors },
 } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();


   const onSubmit = (data) => {
     createUser(data.email, data.password)
       .then(result => {
         const loggedUser = result.user;
         console.log(loggedUser);
         updateUser(data.name, data.photoURL)
           .then(() => {
            const saveUser ={name: data.name, email: data.email}
             fetch("http://localhost:5000/user", {
               method: 'POST',
               headers: {
               'content-type': 'application/json'
               },
               body: JSON.stringify(saveUser)
             })
               .then(res => res.json())
               .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/login");
                }
             })
             
             
           })
         .catch(error=> console.log(error))
       })
   };


  return (
    <>
      <Helmet>
        <title>BISTRO BOSS | Register</title>
      </Helmet>
      <div className=" max-w-7xl mx-auto hero min-h-screen bg-base-200">
        <div className=" md:flex gap-10 items-center px-20">
          <div className="w-1/2 ">
            <img className="" src={img} alt="" />
          </div>
          <div className="w-1/2 ">
            <div className="card  flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-800">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>

                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Your Photo Url"
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-red-800">photoURL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>

                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-800">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <p className="text-red-800">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Registration"
                  />
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registion;