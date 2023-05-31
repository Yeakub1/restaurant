import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import { FaTrash } from 'react-icons/fa';

const AllUsers = () => {
    const {data: users=[], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/user");
        return res.json();
    })
    return (
      <div className="max-w-7xl mx-auto">
        <div className="lg:-mt-96 ">
          <SectionHeading
            subHeding={"---How many??---"}
            heading={"MANAGE ALL USERS"}
          ></SectionHeading>
        </div>
        <Helmet>
          <title>BISTRO BOSS | AllUsers</title>
        </Helmet>
        <div>
          <h2>
            Total Cart:{" "}
            <span className="text-red-600 font-bold">{users.length}</span>
          </h2>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <td>{item.name}</td>
                        </div>
                      </div>
                    </td>
                    <td>{item.email}</td>
                    <td className="text-end">{item.price}</td>
                    <td className="text-red-600 float-right text-xl">
                      <FaTrash />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllUsers;