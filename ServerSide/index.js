const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const QuizzRoute = require("./routes/quizzes");

const cors = require("cors");

dotenv.config({
  override: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/questions", QuizzRoute);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/quizeApp");
    console.log("database connected....");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

const port = process.env.PORT || 3004;

app.listen(port, "localhost", () => {
  console.log(`server started on port ${port}`);
});
