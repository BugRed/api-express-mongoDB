import mongoose, { mongo } from "mongoose";

async function connectionDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default connectionDatabase;





