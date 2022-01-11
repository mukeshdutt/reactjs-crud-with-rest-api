import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { config } from "./config";
import employeeCRUD from "../axios";

const UpdateEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    employeeCRUD
      .EmployeeByID(id)
      .then((response) => {
        setEmployee(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    const data = new FormData(e.target);
    const payload = {
      name: data.get("name"),
      age: parseInt(data.get("age")),
      gender: data.get("gender"),
      mobile: data.get("mobile"),
      email: data.get("email"),
      city: data.get("city"),
      state: data.get("state"),
      country: data.get("country"),
    };
    employeeCRUD
      .UpdateEmployee(id, payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h4>Edit Person</h4>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-6">
            <form>
              <div className="form-group mt-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={employee.name}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  name="age"
                  value={employee.age}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label className="pe-3">Gender</label>
                {config.genders.map((gender, index) => {
                  return (
                    <div className="form-check-inline" key={index}>
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        className="form-check-input"
                      />
                      <label className="form-check-label">{gender}</label>
                    </div>
                  );
                })}
              </div>
              <div className="form-group mt-3">
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={employee.mobile}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={employee.email}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <textarea className="form-control" name="address"></textarea>
              </div>
              <div className="form-group mt-3">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={employee.city}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label>State</label>
                <select name="state" className="form-control">
                  {config.states.map((state, index) => {
                    return <option key={index}>{state}</option>;
                  })}
                </select>
              </div>
              <div className="form-group mt-3">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={employee.country}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-primary me-3" onClick={handleSubmit}>
                  Edit Submit
                </button>
                <button
                  className="btn btn-warning me-3"
                  onClick={(data) => {
                    console.log(employee);
                  }}
                >
                  Reset
                </button>
                <button className="btn btn-info me-3">
                  <Link
                    to="/employees/all"
                    className="text-decoration-none text-white"
                  >
                    Go back
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEmployeeComponent;
