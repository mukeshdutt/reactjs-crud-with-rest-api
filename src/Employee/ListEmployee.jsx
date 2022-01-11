import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import employeeCRUD from "../axios";

const employees1 = [
  {
    id: 1,
    name: "Mukesh Dutt",
    gender: "Male",
    mobile: "9717915661",
    email: "mukeshdutt5@gmail.com",
    address: "India",
    hobbies: ["cricket", "football"],
    state: "Uttarpradesh",
  },
  {
    id: 2,
    name: "Gopal Sarkar",
    gender: "Male",
    mobile: "8713515563",
    email: "gopalsarkar7@gmail.com",
    address: "India",
    hobbies: ["cricket", "football"],
    state: "Uttrakhand",
  },
];

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = useCallback(() => {
    employeeCRUD
      .AllEmployees()
      .then((response) => {
        setEmployees(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (employees.length === 0) {
    return (
      <div>
        <h6>Loading the content, please wait...</h6>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <div className="text-end">
          <button className="btn btn-primary">
            <Link
              to="/employees/add"
              className="text-decoration-none text-white fw-bold"
            >
              Add Person
            </Link>
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th colSpan={2}>Country</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.gender}</td>
                  <td>{person.mobile}</td>
                  <td>{person.email}</td>
                  <td>{person.city}</td>
                  <td>{person.state}</td>
                  <td>{person.country}</td>
                  <td>
                    <Link to={"/employees/edit/" + person.id}>Edit</Link>
                  </td>
                  <td>
                    <Link to={"/employees/delete/" + person.id}>Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListEmployeeComponent;
