import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: "",
  headers: {
    "X-Custom-Header": "foobar",
  },
});

const employeeCRUD = {
  AllEmployees: async () => {
    return await instance.get("/employees");
  },
  EmployeeByID: async (id) => {
    return await instance.get("/employees/" + id);
  },

  SaveEmployee: async (data) => {
    return await instance.post("/employees", data);
  },

  UpdateEmployee: async (id, data) => {
    return await instance.put("/employees/" + id, data);
  },

  DeleteEmployee: async (id) => {
    return await instance.delete("/employees/" + id);
  },
};

export default employeeCRUD;
