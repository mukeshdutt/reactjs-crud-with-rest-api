import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { config } from "./config";
import employeeCRUD from "../axios";

const AddEmployeeComponent = () => {
  // const mobileRef = useRef();
  // const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(mobileRef.current.value);
    // alert(emailRef.current.value);

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
      .SaveEmployee(payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReset = () => {};

  return (
    <>
      <h4>Add Person</h4>
      <div className="container mb-4">
        <div className="row">
          <div className="offset-md-2 col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Age</label>
                <input type="text" name="age" className="form-control" />
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
                  // ref={mobileRef}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  // ref={emailRef}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <textarea className="form-control" name="address"></textarea>
              </div>
              <div className="form-group mt-3">
                <label>City</label>
                <input type="text" name="city" className="form-control" />
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
                <input type="text" name="country" className="form-control" />
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-primary me-3">Add Submit</button>
                <button className="btn btn-warning me-3" onClick={handleReset}>
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

export default AddEmployeeComponent;
