const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(
    DB
  );
  mongoose.connection.on("connected", () => {
    console.log("MongoDB is connected");
  });
  
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB is disconnected");
  });
  
