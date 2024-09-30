import mongoose from "mongoose";
import { type } from "os";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  venue: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;

