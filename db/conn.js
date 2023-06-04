const mongoose = require("mongoose");

// const db=process.env.MONGO_URI;
mongoose
  .connect("mongodb://localhost:27017/coditor-studio")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));
