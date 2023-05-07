const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeesSchema = new Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    age: {
      type: "Number",
      required: true,
    },
    delegation: {
      type: "String",
      required: true,
    },
    gender: {
      type: "String",
      required: true,
    },
    country: {
      type: "String",
      required: true,
    },
    isAdmin: {
      type: "Boolean",
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("employees", employeesSchema);
