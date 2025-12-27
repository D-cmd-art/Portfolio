import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    userName: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.Form ||
  mongoose.model("Form", FormSchema);
