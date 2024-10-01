import mongoose from "mongoose";

const publishSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author:{
      type: String,
      required: false

    },
    description: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    embed:{
      type: String,
      default: ""

    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Publish = mongoose.model("Publish", publishSchema);

export default Publish;
