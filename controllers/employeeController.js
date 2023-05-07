const { default: mongoose } = require("mongoose");
const Employees = require("../models/employee");

const addEmployee = async (req, res) => {
  const { name, age, gender, country, delegation } = req.body;
  try {
    const employee = await Employees.create({
      name,
      age,
      gender,
      delegation,
      country,
    });
    return res.status(200).json(employee);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getAllEmployees = async (_, res) => {
  const employees = await Employees.find({}).sort({ createdAt: -1 });
  return res.status(200).json(employees);
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such employee" });
  }
  const employee = await Employees.findOneAndDelete({ _id: id });
  if (!employee) {
    return res.status(404).json({ error: "no such employee" });
  }
  res.status(200).json({ report: "Deleted SuccessFully", employee: employee });
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such employee" });
  }
  const employee = await Employees.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!employee) {
    return res.status(404).json({ error: "no such employee" });
  }
  res.status(200).json(employee);
};

const findEmployee = async (req, res) => {
  const nameRegex = new RegExp(req.params.id);
  const employee = await Employees.find({
    name: { $regex: nameRegex, $options: "i" },
  });
  if (employee.length === 0) {
    return res.status(404).json({ error: "no such employee" });
  }
  res.status(200).json(employee);
};

module.exports = {
  updateEmployee,
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  findEmployee,
};
