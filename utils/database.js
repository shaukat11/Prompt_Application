import mongoose from "mongoose";

let isconnected = false; // track connection  

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "share_prompt",
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isconnected = true;
    console.log("Connect");
  } catch (error) {
    console.log(error);
  }
};
