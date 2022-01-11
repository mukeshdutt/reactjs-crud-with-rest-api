import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  AddPerson,
  EditPerson,
  DeletePerson,
  ListPerson,
} from "./Person/index";

import {
  ListEmployeeComponent,
  AddEmployeeComponent,
  UpdateEmployeeComponent,
  DeleteEmployeeComponent,
} from "./Employee/index";

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
        <div className="mx-auto mt-2 text-center">
          <h1>Welcome to Basic CRUD application with REST API</h1>
          <Link to="/employees/all">All Employees</Link>
          </div>

          <Routes>
            <Route path="/employees/all" element={<ListEmployeeComponent />}></Route>
            <Route path="/employees/add" element={<AddEmployeeComponent />}></Route>
            <Route path="/employees/edit/:id" element={<UpdateEmployeeComponent />}></Route>
            <Route path="/employees/delete/:id" element={<DeleteEmployeeComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppComponent;
