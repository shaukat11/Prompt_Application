import mongoose from "mongoose";

let isconnected = false; // track connection  

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isconnected = true;
    window.alert("Connect");
  } catch (error) {
    console.log(error);
    alert("Something is fuking wrong here man")
  }
  
};
