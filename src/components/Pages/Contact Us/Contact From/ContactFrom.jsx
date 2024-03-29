import React from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import { useForm } from 'react-hook-form';

const ContactFrom = () => {
     const {
       register,
       reset,
       handleSubmit,
       formState: { errors },
     } = useForm();
  
  const onSubmit = (data) => console.log(data);
  
    return (
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subHeding={"---Send Us a Message---"}
          heading={"CONTACT FORM"}
        ></SectionHeading>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body bg-slate-300"
        >
          <div className="grid lg:grid-cols-2 gap-10">
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
                <span className="label-text">Phone</span>
              </label>

              <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Your Phone Number"
                className="input input-bordered"
              />
              {errors.phone && (
                <span className="text-red-800">phone is required</span>
              )}
            </div>
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
          <div className="">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              {...register("message", { required: true })}
              cols="160"
              rows="10"
              placeholder="Message"
              className="rounded-md px-3 "
            ></textarea>
            {errors.message && (
              <span className="text-red-800">Message is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
};

export default ContactFrom;