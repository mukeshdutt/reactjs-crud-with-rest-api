import React from "react";
import { Link } from "react-router-dom";

class ListPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [
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
      ],
    };
  }

  render() {
    return (
      <div className="mt-5">
        <div className="text-end">
          <button className="btn btn-primary">
            <Link to="/persons/add" className="text-decoration-none text-white fw-bold">Add Person</Link>
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Hobbies</th>
              <th colSpan={2}>State</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.gender}</td>
                  <td>{person.mobile}</td>
                  <td>{person.email}</td>
                  <td>{person.address}</td>
                  <td>{person.hobbies.join(", ")}</td>
                  <td>{person.state}</td>
                  <td>
                    <Link to={"/persons/edit/" + person.id}>Edit</Link>
                  </td>
                  <td>
                    <Link to={"/persons/delete/" + person.id}>Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListPerson;
