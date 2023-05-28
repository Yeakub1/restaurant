import React, { useContext } from 'react';
import img from "../../../assets/others/authentication1.png";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Registion = () => {

  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegisterFrom = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    const loged = { name, email, password, photo };
    console.log(loged);

    createUser(email, password)
      .then((result) => {
        const loggedUsr = result.user;
        console.log(loggedUsr);
          Swal.fire({
            title: "User Register Sucessfull.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        

        // phoot and name
       updateUser(name, photo)
         .then(() => {})
         .catch((error) => console.log("an error occuered", error));
         from.reset();
    })
      


      .catch((error) => {
        console.log(error);
      });
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
              <form onSubmit={handleRegisterFrom} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>

                  <input
                    type="text"
                    name="photo"
                    required
                    placeholder="Your Photo Url"
                    className="input input-bordered"
                  />
                </div>
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
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Registration"
                  />
                </div>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="/login"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
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