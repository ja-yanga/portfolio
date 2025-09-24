import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    info: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Content =
  mongoose.models.Content || mongoose.model("Content", ContentSchema);

export default Content;
