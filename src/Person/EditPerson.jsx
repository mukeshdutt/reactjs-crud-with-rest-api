import React from "react";
import { Link } from "react-router-dom";
import { config } from "./config";

class EditPerson extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(e) {
    alert("Hey I am submit button");
    e.preventDefault();
  }
  handleReset(e) {
    alert("Hey I am reset button");
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h4>Edit Person</h4>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-6">
              <form>
                <div className="form-group mt-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="form-group mt-3">
                  <label>Mobile</label>
                  <input type="text" name="mobile" className="form-control" />
                </div>
                <div className="form-group mt-3">
                  <label>Email</label>
                  <input type="text" name="email" className="form-control" />
                </div>
                <div className="form-group mt-3">
                  <label className="pe-3">Gender</label>
                  {config.genders.map((gender, index) => {
                    return (
                      <div className="form-check-inline" key={index}>
                        <input type="radio" className="form-check-input" />
                        <label className="form-check-label">{gender}</label>
                      </div>
                    );
                  })}
                </div>
                <div className="form-group mt-3">
                  <label>Address</label>
                  <textarea className="form-control"></textarea>
                </div>
                <div className="form-group mt-3">
                  <label className="pe-3">Hobbies</label>

                  {config.hobbies.map((hobby, index) => {
                    return (
                      <div className="form-check-inline" key={index}>
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">{hobby}</label>
                      </div>
                    );
                  })}
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
                  <button
                    className="btn btn-primary me-3"
                    onClick={this.handleSubmit}
                  >
                    Edit Submit
                  </button>
                  <button
                    className="btn btn-warning me-3"
                    onClick={this.handleReset}
                  >
                    Reset
                  </button>
                  <button className="btn btn-info me-3">
                    <Link
                      to="/persons/all"
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
  }
}

export default EditPerson;
