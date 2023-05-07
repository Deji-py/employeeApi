require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const employeesRoutes = require("./routes/employeesRoutes");
const app = express();


app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use("/api/employees", employeesRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started on port " + process.env.PORT);
    });
  })
  .catch((e) => console.log(e.message));
