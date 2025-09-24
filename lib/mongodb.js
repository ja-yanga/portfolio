import mongoose from "mongoose";

let isConnected = false; //Track connection

export const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB already connected!");
    return;
  }
};

try {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "next-test-db",
  });

  isConnected = true;
  console.log("Connect Success");
} catch (error) {
  console.error("Connect Fail", error);
}
