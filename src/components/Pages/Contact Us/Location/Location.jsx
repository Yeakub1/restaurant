import React from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import { FaLocationArrow, FaTimes, FaAddressBook} from 'react-icons/fa';

const Location = () => {
    return (
      <div className="max-w-7xl mx-auto mb-20 mt-10">
        <SectionHeading
          subHeding={"---Visit Us---"}
          heading={"OUR LOCATION"}
        ></SectionHeading>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-slate-200 rounded-md">
            <h1 className="bg-[#D1A054] p-5 text-3xl  flex justify-center">
              {" "}
              <FaAddressBook />
            </h1>
            <h1 className="font-bold text-3xl mt-7">PHONE</h1>
            <h1 className="mb-7 mt-3">+38 (012) 34 56 789</h1>
          </div>
          <div className="bg-slate-200 rounded-md">
            <h1 className="bg-[#D1A054] p-5 text-3xl flex justify-center">
              {" "}
              <FaAddressBook />
            </h1>
            <h1 className="font-bold text-3xl mt-7">ADDRESS</h1>
            <h1 className="mb-7 mt-3">Dhaka, Banglades</h1>
          </div>
          <div className="bg-slate-200 rounded-md">
            <h1 className="bg-[#D1A054] p-5 text-3xl flex justify-center">
              <FaTimes />
            </h1>
            <h1 className="font-bold text-3xl mt-7">WORKING HOURS</h1>
            <h1 className=" mt-3">Mon - Fri: 08:00 - 22:00</h1>
            <h1 className="mb-5">Sat - Sun: 10:00 - 23:00</h1>
          </div>
        </div>
      </div>
    );
};

export default Location;