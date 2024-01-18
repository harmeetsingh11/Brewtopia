require("dotenv").config();
const mongoose = require("mongoose");

// Connecting to the database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`server is running on ${process.env.PORT}`)
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
