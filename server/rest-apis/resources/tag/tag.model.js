import mongoose from "mongoose";

const tag = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Tag = mongoose.model("Tag", tag);

export default Tag;
