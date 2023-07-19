import { Schema, model, models } from "mongoose";

const userSchema = new Schema({  
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: [true, "Email already exists!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username Invalid, it should contain 8-20 alphanumeric letters and be unique",
    ],
  },
  image: {
    type: String,
  },
});

// create model to create connection every time when needed
const user = models.User || model("user", userSchema);

export default user;