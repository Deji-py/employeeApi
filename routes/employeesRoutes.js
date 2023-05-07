const express = require("express");
const {
  addEmployee,
  getAllEmployees,
  findEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employeeController");

const route = express.Router();

route.get("/", getAllEmployees);

route.post("/", addEmployee);

route.get("/:id", findEmployee);

route.delete("/:id", deleteEmployee);

route.patch("/:id", updateEmployee);

module.exports = route;
