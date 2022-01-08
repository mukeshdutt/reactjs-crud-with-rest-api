import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  AddPerson,
  EditPerson,
  DeletePerson,
  ListPerson,
} from "./Person/index";

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="mx-auto mt-2 text-center">
            <h4>Welcome to the My First CRUD application with REST APIs</h4>
            <h5>
              <Link to="person/all">All Persons</Link>
            </h5>
          </div>
          <Routes>
            {/* <Route exact path="/" element={<AppComponent />}></Route> */}
            <Route path="person/all" element={<ListPerson />}></Route>
            <Route path="person/add" element={<AddPerson />}></Route>
            <Route path="person/edit" element={<EditPerson />}></Route>
            <Route path="person/delete" element={<DeletePerson />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppComponent;
